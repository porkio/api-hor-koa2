/**
 * @description UsersController
 * @author Pork
 * @email porksb@163.com
 */

const { User } = require('../models/index')
const https = require('https')
const crypto = require('crypto')
const { redisSet } = require('../db/redis')
const { getUserInfoError, updateUserInfoError, paramsMissing } = require('../config/errorsOptions')
const ResSuccess = require('../config/ResSuccess')

// 请求 session_key
async function getSessionKey (code, appid, appSecret, user_info) {
    const params = `?appid=${appid}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
    const data = await _httpsGetAsync('https://api.weixin.qq.com/sns/jscode2session' + params)
    const token = _tokenGenerator(data.session_key)
    redisSet(token, data.session_key) // 存入 redis

    const wxUser = JSON.parse(user_info) // 解析微信用户基础数据

    const user = await User.findOrCreate({
        where: {
            openId: data.openid
        },
        defaults: wxUser
    })

    if (user) {
        return new ResSuccess({ data: { token, user_id: user[0].dataValues.id } })
    }
    return null
}

// 获取用户信息
const getUserInfo = async user_id => {
    try {
        const user = await User.findOne({
            where: { id: user_id, state: 1 }
        })
        if (user) {
            return new ResSuccess({ data: { userInfo: user.dataValues } })
        }
        return getUserInfoError
    } catch (error) {
        return getUserInfoError
    }
}

// 更新用户信息
const update = async (user_id, prop, value) => {
    if (!user_id || !prop || !value) return paramsMissing
    try {
        const result = await User.update({
            [prop]: value
        }, {
            where: { id: user_id }
        })
        if (result) {
            console.log(result)
            return new ResSuccess()
        } else return updateUserInfoError

    } catch (error) {
        return updateUserInfoError
    }
}

// Async 化 https get 请求
async function _httpsGetAsync (url) {
    // Promise化 https get 请求
    function _promisifyHttpsGet (url) {
        return new Promise((resolve, reject) => {
            https.get(url, (req, res) => {
                let data = ''
                req.on('data', chunk => data += chunk)
                req.on('end', () => resolve(JSON.parse(data)))
            }).on('error', err => reject(err))
        })
    }
    return await _promisifyHttpsGet(url)
}

// token 生成器
const _tokenGenerator = sessionKey => {
    return crypto.createHash('sha1').update(sessionKey, 'utf8').digest('hex')
}

module.exports = {
    getSessionKey,
    getUserInfo,
    update
}
