const router = require('koa-router')()
router.prefix('/api')

router.get('/', async (ctx, next) => {
    ctx.body = '<h1>Hor API center...</h1>'
})

module.exports = router