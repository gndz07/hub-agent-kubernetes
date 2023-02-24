// src/mocks/handlers.js
import { rest } from 'msw'
import petstore from './petstore.json'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    return res(
      // TODO confirm how the response going to be, this is fully assumed
      ctx.status(200),
      ctx.json({
        accessToken: 'mockt0ken18683jbdb',
        user: {
          username: 'user@email.com',
        },
      }),
    )

    /* To mock fail request*/

    // return res(
    //   ctx.status(401),
    //   ctx.json({
    //     errorMessage: 'Unauthorized',
    //   }),
    // )
  }),

  rest.get('/api/:catalogName/services', (req, res, ctx) => {
    const headers = req.headers
    if (headers.get('Authorization')) {
      return res(ctx.status(200), ctx.json(['petstore-svc@petstore', 'petstore2-svc@petstore2']))
    } else {
      return res(
        ctx.status(401),
        ctx.json({
          errorMessage: 'Unauthorized',
        }),
      )
    }
  }),

  rest.get('/api/:catalogName/services/:serviceName', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(petstore))
  }),
]
