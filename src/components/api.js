import { createRequestBuilder } from '@commercetools/api-request-builder'
import { createClient } from '@commercetools/sdk-client'
import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createQueueMiddleware } from '@commercetools/sdk-middleware-queue'

const clientId = process.env.REACT_APP_CLIENT_ID
const clientSecret = process.env.REACT_APP_CLIENT_SECRET

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
	host: 'https://auth.commercetools.co',
	projectKey: 'frontend-interview-exercise',
	credentials: {
		clientId: clientId,
		clientSecret: clientSecret,
	},
})

const httpMiddleware = createHttpMiddleware({
	host: 'https://api.commercetools.co',
})

const queueMiddleware = createQueueMiddleware({
	concurrency: 3,
})

export const client = createClient({
	middlewares: [authMiddleware, httpMiddleware, queueMiddleware],
})

export const requestBuilder = createRequestBuilder({ projectKey: 'frontend-interview-exercise' })