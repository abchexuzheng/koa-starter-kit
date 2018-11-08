import Router from 'koa-router'
import user from './user'
import { apiPrefix } from '../config/base.config'

const router = Router()
const routerList = [{
  path: '/user',
  router: user
}]

export default function (app) {
  routerList.forEach(routerItem => {
    routerItem.router.prefix(apiPrefix + routerItem.path)
    app.use(routerItem.router.routes())
  })
  app.use(router.routes())
  app.use(router.allowedMethods())
}
