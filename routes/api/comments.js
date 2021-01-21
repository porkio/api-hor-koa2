const router = require('koa-router')()

router.prefix('/api/comments')

router.get('list', async (ctx, next) => {
    const { articleId } = ctx.request.body
    // controller
    await getListByArticleId(articleId)
})
module.exports = router