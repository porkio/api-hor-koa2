const sequelize = require('../db/sequlize')
const { Model } = require('sequelize')
const { INTEGER, STRING, DATE, DECIMAL, BOOLEAN, TEXT } = require('../db/DataTypes')
const vipAccountGenerator = require('../utils/vipAccountGenerator')

class User extends Model { }

User.init({
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    openId: {
        type: STRING,
        allowNull: true,
        unique: true,
        comment: '用户唯一标识'
    },
    nickName: {
        type: STRING,
        allowNull: false,
        comment: '昵称'
    },
    identityId: {
        type: STRING,
        allowNull: true,
        validate: {
            len: 18
        },
        comment: '身份证号'
    },
    password: {
        type: STRING,
        allowNull: true,
        comment: '密码'
    },
    vipAccount: {
        type: STRING,
        allowNull: false,
        unique: true,
        defaultValue: vipAccountGenerator(),
        commnet: '会员编号'
    },
    wxAccount: {
        type: STRING,
        allowNull: true,
        unique: true,
        comment: '微信账号'
    },
    avatarUrl: {
        type: STRING,
        allowNull: true,
        comment: '头像'
    },
    telNumber: {
        type: STRING,
        allowNull: true,
        comment: '手机号'
    },
    birthday: {
        type: STRING,
        allowNull: true,
        comment: '生日'
    },
    gender: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 1, // 1 男， 2 女， 3 保密
        comment: '性别'
    },
    age: {
        type: INTEGER,
        allowNull: true,
        comment: '年龄'
    },
    height: {
        type: INTEGER,
        allowNull: true,
        comment: '身高(cm)'
    },
    weight: {
        type: DECIMAL,
        allowNull: true,
        comment: '体重(kg)'
    },
    country: {
        type: STRING,
        allowNull: true,
        comment: '国家'
    },
    province: {
        type: STRING,
        allowNull: true,
        comment: '省份'
    },
    city: {
        type: STRING,
        allowNull: true,
        comment: '城市'
    },
    adress: {
        type: STRING,
        allowNull: true,
        comment: '居住地址'
    },
    jobs: {
        type: STRING,
        allowNull: true,
        comment: '工作'
    },
    car: {
        type: STRING,
        allowNull: true,
        comment: '座驾'
    },
    educational: {
        type: STRING,
        allowNull: true,
        comment: '学历'
    },
    school: {
        type: STRING,
        allowNull: true,
        comment: '学校'
    },
    aboutMe: {
        type: STRING,
        allowNull: true,
        defaultValue: '这个人很懒，什么都没有留下！',
        comment: '关于我'
    },
    hobby: {
        type: STRING,
        allowNull: true,
        comment: '兴趣爱好'
    },
    ganqingguan: {
        type: STRING,
        allowNull: true,
        comment: '感情观'
    },
    say: {
        type: STRING,
        allowNull: true,
        comment: '语音url'
    },
    heartTa: {
        type: TEXT,
        allowNull: true,
        comment: '心仪的Ta'
    },
    isAuth: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: '是否认证'
    },
    state: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: '状态(是否可用)'
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
})

module.exports = User