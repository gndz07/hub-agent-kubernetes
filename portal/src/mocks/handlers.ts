// src/mocks/handlers.js
import { rest } from 'msw'
import api from './api.json'
import collectionApi from './collection-api.json'

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

  rest.get('/api/:portalName/apis', (req, res, ctx) => {
    // const headers = req.headers
    // if (headers.get('Authorization')) {
    return res(
      ctx.status(200),
      ctx.json({
        "collections":[{"name": "my-store-collection", "apis": [{"name":"my-petstore-api","specLink":"/collections/my-store-collection/apis/my-petstore-api@petstore"}]}],
        "apis":[{"name":"my-petstore-api","specLink":"/apis/my-petstore-api@petstore"}]
      }),
    )
    // } else {
    //   return res(
    //     ctx.status(401),
    //     ctx.json({
    //       errorMessage: 'Unauthorized',
    //     }),
    //   )
    // }
  }),

  rest.get('/api/:portalName/apis/:apiName', (req, res, ctx) => {
    // const headers = req.headers
    // if (headers.get('Authorization')) {
    return res(ctx.status(200), ctx.json(api))
    // } else {
    //   return res(
    //     ctx.status(401),
    //     ctx.json({
    //       errorMessage: 'Unauthorized',
    //     }),
    //   )
    // }
  }),

  rest.get('/api/:portalName/collections/:collectionName/apis/:apiName', (req, res, ctx) => {
      // const headers = req.headers
      // if (headers.get('Authorization')) {
        return res(ctx.status(200), ctx.json(collectionApi))
      // } else {
      //   return res(
      //     ctx.status(401),
      //     ctx.json({
      //       errorMessage: 'Unauthorized',
      //     }),
      //   )
      // }
    }),
]
