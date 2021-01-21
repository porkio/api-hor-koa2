/**
 * @description Sync Database
 * @author Pork
 * @email porksb@163.com
 */
const sequelize = require('./sequlize')

const { User, Article, Comment } = require('../models/index')
const init = require('./init')

// 测试连接
sequelize.authenticate().then(() => console.log('Auth Ok.')).catch(err => console.log(err))

// 同步数据库
sequelize.sync({ force: true }).then(async () => {
    console.log('Database Sync Ok.')
    await init()
    process.exit()
}).catch(err => console.log(err))