const Sequelize = require("sequelize")

const sequelize = new Sequelize('site1', 'root', 'Skt2356@',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}