import Router from 'koa-router'
import insertUser from '../controller/user'
const router = Router()

router.prefix('/user')

router.post('/setUser', function (ctx, next) {
  const reqData = ctx.request.body
  ctx.body = {
    code: 0,
    data: ctx.request.body
  }
})

export default router
