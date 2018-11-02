import Router from 'koa-router'
import users from './users'

const router = Router()

export default function (app) {
  app.use(users.routes())
  app.use(router.routes())
  app.use(router.allowedMethods())
}