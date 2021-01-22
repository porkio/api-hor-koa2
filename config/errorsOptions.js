/**
 * @description 错误信息配置汇总
 * @author Pork
 * @email porksb@163.com
 */
module.exports = {
    noLoginError: {
        errno: -1,
        message: '未登陆'
    },
    paramsMissing: {
        errno: 1000,
        message: '缺少必要的参数'
    },
    getArticlesListError: {
        errno: 1001,
        message: '获取文章列表出错'
    },
    getUserInfoError: {
        errno: 1002,
        message: '获取用户信息出错'
    },
    updateUserInfoError: {
        errno: 1003,
        message: '更新用户信息出错'
    }
}