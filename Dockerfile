# Add lockfile and package.json's of isolated subworkspace
FROM oven/bun AS installer
# RUN apk add --no-cache libc6-compat
# RUN apk update
WORKDIR /app
# First install dependencies (as they change less often)
COPY . .
COPY .gitignore .gitignore
RUN bun i

ENV NODE_ENV=production
RUN bun run build

# FROM oven/bun AS installer2
# COPY --from=installer /app/package.json ./package.json
# COPY --from=installer /app/bun.lockb ./bun.lockb
# RUN bun i --production --frozen-lockfile

FROM oven/bun as with-infisical
## update debian
RUN apt update && apt upgrade

## install curl
RUN apt-get install curl -y

## install infisical
# RUN apk add --no-cache bash curl && curl -1sLf \
#   'https://dl.cloudsmith.io/public/infisical/infisical-cli/setup.alpine.sh' | bash \
#   && apk add infisical
RUN curl -1sLf \
  'https://dl.cloudsmith.io/public/infisical/infisical-cli/setup.deb.sh' \
  | bash
RUN apt-get update && apt-get install -y infisical

FROM with-infisical AS runner
WORKDIR /app
USER root

###### Copy package.json #####
COPY --from=installer /app/package.json ./package.json
COPY --from=installer /app/bun.lockb ./bun.lockb
# RUN bun i --production --frozen-lockfile

# Create the expressjs user and group
RUN addgroup --system elysiajs && \
  adduser --system --ingroup elysiajs elysiajs

# Create the directories and set ownership and permissions
# RUN mkdir -p shared/req 
#&& \
# chown expressjs:expressjs shared/req && \
# chmod 770 shared/req

USER elysiajs

# COPY --from=installer /app .

###### Copy turbo.json #####
# COPY --from=builder /app/out/full/turbo.json ./turbo.json


###### Copy node_modules #####
# COPY --from=installer2 /node_modules ./node_modules

###### Copy api server ######
COPY --from=installer /app/dist ./dist


ENV PORT=3333
EXPOSE 3333

CMD bun dist/index.js --smol
