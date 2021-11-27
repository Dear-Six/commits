const Koa = require('koa')
const app = new Koa()
const fs = require('fs')

const Router = require('koa-router')

const router = require('./router/index')

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
})
