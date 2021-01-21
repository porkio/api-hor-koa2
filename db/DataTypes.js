/**
 * @description ORM 模型数据类型
 * @author Pork
 * @email porksb@163.com
 */
const { DataTypes } = require('sequelize')

module.exports = {
    UUID: DataTypes.UUID,
    INTEGER: DataTypes.INTEGER,
    DECIMAL: DataTypes.DECIMAL,
    STRING: DataTypes.STRING,
    DATE: DataTypes.DATE,
    TEXT: DataTypes.TEXT,
    JSON: DataTypes.JSON,
    BOOLEAN: DataTypes.BOOLEAN
}
