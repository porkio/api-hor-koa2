const sequelize = require('../db/sequlize')
const { Sequelize, Model } = require('sequelize')
const { INTEGER, STRING, DATE, DECIMAL, BOOLEAN, TEXT } = require('../db/DataTypes')

class Photo extends Model { }

Photo.init({
    url: {
        type: STRING,
        allowNull: false,
        comment: '照片url'
    },
    userId: {
        type: INTEGER,
        allowNull: false,
        comment: '所属用户id'
    }
}, {
    sequelize,
    modelName: 'Photo',
    tableName: 'photos'
})

module.exports = Photo