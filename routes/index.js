import Router from 'koa-router'
import user from './user'

const router = Router()

export default function (app) {
  app.use(user.routes())
  app.use(router.routes())
  app.use(router.allowedMethods())
}
