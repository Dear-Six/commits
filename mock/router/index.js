const Router = require('koa-router')
const router = new Router()
const commits = require('./modules/commits')
router.use('/commits', commits.routes(), commits.allowedMethods())
module.exports = router