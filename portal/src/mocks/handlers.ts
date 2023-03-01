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
      return res(
        ctx.status(200),
        ctx.json([
          { name: 'API Group 1', type: 'api-group', apis: ['petstore-svc@petstore', 'petstore2-svc@petstore2'] },
          { name: 'petstore3-svc@petstore3', type: 'api' },
        ]),
      )
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
    const headers = req.headers
    if (headers.get('Authorization')) {
      return res(ctx.status(200), ctx.json(petstore))
    } else {
      return res(
        ctx.status(401),
        ctx.json({
          errorMessage: 'Unauthorized',
        }),
      )
    }
  }),
]
