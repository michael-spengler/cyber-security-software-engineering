import { Server } from "./server.ts"

const port = Number(Deno.args[0])

new Server().startListening(port)