/**
 * @description 文章路由
 * @author Pork
 * @email porksb@163.com
 */
const router = require('koa-router')()

router.prefix('/api/articles')

// 获取全部文章
router.get('all', async (ctx, next) => {

})

module.exports = router