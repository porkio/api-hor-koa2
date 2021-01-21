const env = process.env.NODE_ENV

let port = 4000
const appid = 'wxd539fae9f354564c'
const appSecret = '3c4e9da71faa451a53c19aec91161948'

const MYSQL_CONF = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'api_hor',
    dialect: 'mysql'
}

const REDIS_CONF = {
    host: '127.0.0.1',
    port: 6379
}

// 生产环境的 mysql 配置
if (env === 'production') {
    port = 8880
    Object.assign(MYSQL_CONF, {
        user: 'root',
        password: '123456789',
        database: 'api_hor',
    })
}

module.exports = {
    port,
    appid,
    appSecret,
    MYSQL_CONF,
    REDIS_CONF
}
