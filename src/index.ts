import { Elysia, t } from "elysia";
import {cors} from "@elysiajs/cors"
import {object, string ,parse, withDefault, number, transform, coerce} from "valibot"

const EnvSchema = object({
  NEXT_PUBLIC_WEB_URL: string("no env NEXT_PUBLIC_WEB_URL"),
  PORT: withDefault(coerce(number("Please provide PORT"), Number), 3334),
})

const env = parse(EnvSchema, process.env)
console.log("env", env)


const app = new Elysia().use(cors())

app.get("/", () => "Hello Elysia")

app.post("/v1/payment/status", ({body, set}) => {
  console.log("body:")
  console.table( body)

  const url = new URL(`${env.NEXT_PUBLIC_WEB_URL}/payment/status`)
  const params = new URLSearchParams()
  for (const [key, value] of Object.entries(body)) {
    params.set(key, value)
  }
  url.search = params.toString()

  console.log(url.toString())
  set.status = 302
  set.headers = {
    location: url.toString()
  }
}, {
    body: t.Object({
      transNo: t.String(),
      respCode: t.String(),
      status: t.String(),
      orderNo: t.String()
    })
  })

app.listen(env.PORT);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
