/**
 * @description vipAccount Generator vip账号生成器 8位
 * @author Pork
 * @email porksb@163.com
 */
function vipAccountGenerator () {
    const date = new Date()
    const dateString = Date.now().toString()
    let result = (dateString.slice(7).split().reverse().join()) + (date.getDate() + parseInt(Math.random() * 68))

    result = (function (str) {
        if (str[0] == 0) {
            str = str.slice(1)
            arguments.callee(str)
        }
        const nowString = Date.now().toString()
        str.length < 8 && (str += nowString[nowString.length - 1])
        str.length < 8 && arguments.callee(str)
        return str
    })(result)

    return result
}

module.exports = vipAccountGenerator
