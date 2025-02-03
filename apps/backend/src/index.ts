import { Elysia } from 'elysia'
import { env } from './lib/env'
import { cors } from '@elysiajs/cors'

const app = new Elysia()
	.use(cors())
	.get('/', () => 'Hello Elysia')
	.listen(env.PORT)

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
