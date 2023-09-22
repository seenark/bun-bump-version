docker-build:
  docker build -t hadesgod/plai-payment --platform=linux/amd64 .

server-up:
  API_IMAGE=hadesgod/plai-payment NEXT_PUBLIC_WEB_URL=https://ai.aquilastudio.net docker compose -f docker-compose.payment.yaml up -d
