const Router = require('koa-router')
const Mock = require('mockjs')
const commits = new Router()
commits.get('/list',(ctx)=>{
    ctx.body = Mock.mock({
        "list|10":[{
            "user":{
                "name":"@name",
                "commit_date":"@date('yyyy-MM-dd')",
            }
        }]
    })
})
module.exports = commits