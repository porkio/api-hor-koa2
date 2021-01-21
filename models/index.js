/**
 * @description 数据模型入口 + 模型关联
 * @author Pork
 * @email porksb@163.com
 */
const User = require('./User')
const Article = require('./Article')
const Comment = require('./Comment')
const Photo = require('./Photo')

Article.belongsTo(User, {
    foreignKey: 'userId'
})
User.hasMany(Article)

Comment.belongsTo(User, {
    foreignKey: 'userId'
})
User.hasMany(Comment)

Comment.belongsTo(Article, {
    foreignKey: 'articleId'
})
Article.hasMany(Comment)

Photo.belongsTo(User, {
    foreignKey: 'userId'
})
User.hasMany(Photo)

module.exports = {
    User,
    Article,
    Comment
}