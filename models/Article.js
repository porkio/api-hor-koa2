const sequelize = require('../db/sequlize')
const { Model, Op } = require('sequelize')
const moment = require('moment')
const { INTEGER, STRING, DATE, DECIMAL, BOOLEAN, TEXT } = require('../db/DataTypes')

class Article extends Model { }

Article.init({
    content: {
        type: TEXT,
        allowNull: false,
        comment: '内容'
    },
    desc: {
        type: STRING,
        allowNull: true,
        comment: '摘要',
        get () {
            return this.getDataValue('content').slice(0, 96)
        }
    },
    createdAt: {
        type: DATE,
        get () {
            return moment(this.getDataValue('createdAt')).format('YYYY年MM月DD日 HH:mm:ss');
        }
    },
    likes: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '点赞次数'
    },
    commentsTotal: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '评论条数'
    },
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '所属用户Id'
    }
}, {
    sequelize,
    modelName: 'Article',
    tableName: 'articles'
})

module.exports = Article