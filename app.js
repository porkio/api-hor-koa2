const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('./config')
const indexRoutes = require('./routes/api/index')
const userRoutes = require('./routes/api/users')

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
    .use(json())
    .use(logger())
    .use(require('koa-static')(__dirname + '/public'))
    .use(views(path.join(__dirname, '/views'), {
        options: { settings: { views: path.join(__dirname, 'views') } },
        map: { 'ejs': 'ejs' },
        extension: 'ejs'
    }))

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})

// 跨域访问
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin')
    await next()
})

// routes
app.use(userRoutes.routes(), userRoutes.allowedMethods())
app.use(indexRoutes.routes(), indexRoutes.allowedMethods())

router.get('/', async (ctx, next) => {
    // ctx.body = 'Hello World'
    ctx.state = {
        title: '<h1>Hor API center...</h1>'
    }
    await ctx.render('index', ctx.state)
})

app.on('error', function (err, ctx) {
    console.log(err)
    logger.error('服务出错: ', err, ctx)
})

module.exports = app.listen(config.port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
