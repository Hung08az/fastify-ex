const { Sequelize } = require('sequelize');
const config = require('./constant.json');
//define DB
const sequelize = new Sequelize(config.DB_DATABASE, config.DB_USER, config.DB_PASS, {
    host: config.DB_HOST,
    dialect: 'mysql'
});

// connection
const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = { connect };