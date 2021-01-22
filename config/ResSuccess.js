class ResSuccess {
    constructor({ errno = 0, message = 'Ok.', data = null } = {}) {
        this.errno = errno
        this.message = message
        this.data = data
    }
}

module.exports = ResSuccess