/**
 * @description Database Init
 * @author Pork
 * @email porksb@163.com
 */
const sequelize = require('./sequlize')
const { User, Article, Comment } = require('../models/index')

async function init () {
    // const pork = await User.create({
    //     nickName: '猪肉王子',
    //     wxAccount: 'zhaoxu-1',
    //     avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/SCBpWZw1RbZURF6rVTvMUEiaF8cwWicjBRibztbA0whCkic8v6wNHNXNRzgd4e1HB7ibdFap3mWbfS7oZcFeaXAptHw/132',
    //     sex: 1,
    // })

    // const article = await Article.create({
    //     content: '几年前我跟一个寡妇结了婚，她有一个已成年的女儿，后来嫁给了我父亲。我继女就成了我的继母，而我父亲也就成了我的女婿。\n两年后我妻子为我生了一个儿子 ，他是我继母的同母异父的弟弟，我儿子管我叫爸爸，我管我儿子叫舅舅。\n我的继女又为我父亲生了一个儿子，他是我的弟弟，但他又必须叫我外公。\n我是我妻子的丈夫，我妻子却是我继母的母亲，所以我是我自己的外公。\n于是我想到了死',
    //     likes: 100,
    //     commentsTotal: 0,
    //     userId: pork.dataValues.id
    // })

    // const comment = await Comment.create({
    //     content: '这是一条测试评论',
    //     userId: pork.dataValues.id,
    //     articleId: article.dataValues.id
    // })
}

module.exports = init