import Koa from 'koa'
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import path from 'path'
import logUtil from './utils/log'
import errorController from './middleware/errorController'
import setRoutes from './routes'

const app = new Koa()

// error handler
onerror(app)
app.use(errorController)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(require('koa-static')(path.join(__dirname, 'public')))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  logUtil.logResponse(ctx, ms)
})

// routes
setRoutes(app)

// error-handling
app.on('error', (err, ctx) => {
  logUtil.logError(ctx, err)
})

module.exports = app
