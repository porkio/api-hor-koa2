/**
 * @description 文章控制器
 * @author Pork
 * @email porksb@163.com
 */
const { Article, Comment, User } = require('../models/index')
const { getArticlesListError, paramsMissing } = require('../config/errorsOptions')

// 通过
const getArticlesListByUserId = async user_id => {
    if (!user_id) return paramsMissing
    try {
        const list = Article.findAndCountAll({
            include: [{
                model: Comment,
                attributes: ['id', 'content'],
                include: [{
                    model: User,
                    attributes: ['id', 'nickName', 'avatarUrl']
                }]
            }]
        })
        return list
    } catch (error) {
        return getArticlesListError
    }
}

module.exports = {
    getArticlesListByUserId
}