/**
 * @description 连接 redis
 * @author Pork
 * @email porksb@163.com
 */
const redis = require('redis')
const { REDIS_CONF } = require('../config/index')

const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)

redisClient.on('error', err => {
    console.log('RedisClient Error:', err)
})

/**
 * @description redis set 默认 7 天过期
 * @param { String } key
 * @param { String } value
 * @param { Number } timeout
 */
const redisSet = (key, value, timeout = 3600 * 24 * 7) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    redisClient.set(key, value)
    redisClient.expire(key, timeout)
}

/**
 * @description redis get
 * @param { String } key
 */
const redisGet = key => {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, value) => {
            if (err) {
                reject(err)
                return null
            }
            if (value == null) {
                resolve(null)
                return
            }
            try {
                resolve(
                    JSON.parse(value)
                )
            } catch (ex) {
                resolve(value)
            }
        })
    })
}

module.exports = {
    redisGet,
    redisSet
}
