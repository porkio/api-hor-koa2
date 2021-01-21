const sequelize = require('../db/sequlize')
const { Model, Op } = require('sequelize')
const moment = require('moment')
const { INTEGER, STRING, DATE, DECIMAL, BOOLEAN, TEXT } = require('../db/DataTypes')

class Comment extends Model { }

Comment.init({
    content: {
        type: STRING,
        allowNull: false,
        comment: '评论'
    },
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '所属用户Id'
    },
    articleId: {
        type: INTEGER,
        allowNull: false,
        comment: '文章Id'
    },
    createdAt: {
        type: DATE,
        get () {
            return moment(this.getDataValue('createdAt')).format('YYYY年MM月DD日 HH:mm:ss')
        }
    }
}, {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments'
})

module.exports = Comment