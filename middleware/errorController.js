// 错误处理中间件
export default async function errorController(ctx, next) {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 200
    ctx.body = {
      code: 1,
      msg: err.message
    }
    ctx.app.emit('error', err, ctx)
  }
}
