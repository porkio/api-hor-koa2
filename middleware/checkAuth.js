/**
 * @description 登陆校验中间件
 * @author Pork
 * @email porksb@163.com
 */
const { redisGet } = require('../db/redis')
const { noLoginError } = require('../config/errorsOptions')

const checkAuth = async (ctx, next) => {
    const token = ctx.request.body.token || ctx.query.token
    if (!token) {
        console.log(token)
        ctx.body = noLoginError
        return
    }

    try {
        const t = await redisGet(token)
        if (t) {
            await next()
        } else {
            ctx.body = noLoginError
            return
        }
    } catch (error) {
        console.log('AAAAAAAA： ', error)
        ctx.body = noLoginError
        return
    }
}

module.exports = checkAuth