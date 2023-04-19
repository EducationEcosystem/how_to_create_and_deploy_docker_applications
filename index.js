const Koa = require('koa')
const app = module.exports = new Koa()
const database = require('./database')

app.use(async function(ctx) {
  ctx.body = 'Hello World'
})

database.start()

if (!module.parent) app.listen(3000)
