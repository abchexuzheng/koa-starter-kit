import Router from 'koa-router'
import { insertUser } from '../controller/user'
import { getCounterIndex } from '../controller/counter'
const router = Router()

// router.prefix('/user')

// 注册用户
router.post('/signUp', async (ctx, next) => {
  const reqData = ctx.request.body
  const { name } = reqData
  if (!name) {
    throw new Error('请输入用户名！')
  }
  const user = await insertUser(name)
  ctx.body = {
    rank: user._id
  }
})

// 获取用户数量
router.get('/getUserCount', async (ctx, next) => {
  const userCount = await getCounterIndex('user')
  ctx.body = {
    count: userCount
  }
})

export default router
