import Router from 'koa-router'
import { insertUser } from '../controller/user'
import { getCounterIndex } from '../controller/counter'
const router = Router()

router.prefix('/user')

// 注册用户
router.post('/signUp', async (ctx, next) => {
  const reqData = ctx.request.body
  const { name } = reqData
  const user = await insertUser(name)
  ctx.body = {
    code: 0,
    data: {
      rank: user._id
    }
  }
})

// 获取用户数量
router.get('/getUserCount', async (ctx, next) => {
  const userCount = await getCounterIndex('user')
  ctx.body = {
    code: 0,
    data: {
      count: userCount
    }
  }
})

export default router