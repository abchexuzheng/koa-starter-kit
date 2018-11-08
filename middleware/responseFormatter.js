import { apiPrefix } from '../config/base.config'

// 格式化输出中间件
async function responseFormatter(ctx, next) {
  const reg = new RegExp(`^${apiPrefix}`)
  // 匹配api路由
  if (!reg.test(ctx.originalUrl)) {
    await next()
    return
  }
  try {
    await next()
    if (ctx.body) {
      ctx.body = {
        code: 0,
        message: 'success',
        data: JSON.parse(ctx.body)
      }
    } else {
      ctx.body = {
        code: 0,
        message: 'success'
      }
    }
  } catch (err) {
    ctx.status = err.status || 200
    ctx.body = {
      code: 1,
      msg: err.message
    }
    ctx.app.emit('error', err, ctx)
  }
}

export default responseFormatter
