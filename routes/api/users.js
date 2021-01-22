/**
 * @description UsersController
 * @author Pork
 * @email porksb@163.com
 */

const router = require('koa-router')()
const { getArticlesListByUserId } = require('../../controller/ArticlesController')
const { getSessionKey, getUserInfo, update } = require('../../controller/UsersController')
const { appid, appSecret } = require('../../config/index')
const checkAuth = require('../../middleware/checkAuth')

router.prefix('/api/users')

router.get('/', async (ctx, next) => {
    ctx.body = {
        title: '用户中心测试页'
    }
})

// 用户登陆
router.post('/login', async (ctx, next) => {
    const { code, user_info, encrypted_data, iv, signature } = ctx.request.body
    // controller
    ctx.body = await getSessionKey(code, appid, appSecret, user_info)
})

// 获取用户信息
router.get('/detail', checkAuth, async (ctx, next) => {
    const { user_id, token } = ctx.query

    // controller
    ctx.body = await getUserInfo(user_id)
})

// 获取当前用户的文章列表
router.get('/articlesList', checkAuth, async (ctx, next) => {
    const { user_id } = ctx.query
    // controller
    const list = await getArticlesListByUserId(user_id)
    ctx.body = { errno: 0, data: list }
})

// 更新用户信息
router.post('/update', checkAuth, async (ctx, next) => {
    const { user_id, prop, value } = ctx.request.body
    console.log(user_id, prop, value)

    // controller
    ctx.body = await update(user_id, prop, value)
})

module.exports = router