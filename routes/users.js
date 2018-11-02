import Router from 'koa-router'
import {insertUser} from '../controller/user'
const router = Router()

router.prefix('/user')

router.post('/setUser', async function (ctx, next) {
  const reqData = ctx.request.body
  const {name} = reqData
  const user = await insertUser(name)
  ctx.body = {
    code: 0,
    data: {
      rank:user._id
    }
  }
})

export default router
