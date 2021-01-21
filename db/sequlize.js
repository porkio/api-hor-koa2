/**
 * @description Sequelize ORM
 * @author Pork
 * @email porksb@163.com
 */
const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../config/index')
const { host, user, password, database, dialect } = MYSQL_CONF

const conf = {
    host,
    dialect,
    define: {
        underscored: true
    },
    // 添加这个配置 
    dialectOptions: {
        dateStrings: true,
        typeCast: true
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
}

const sequelize = new Sequelize(database, user, password, conf)

module.exports = sequelize

