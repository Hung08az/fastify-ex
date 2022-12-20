const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud', 'buzz', 'buzzdaika', {
    host: '45.32.63.28',
    dialect: 'mysql'
});

const user = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    zipcode: Sequelize.INTEGER,
    city: Sequelize.STRING,
    role: Sequelize.INTEGER,
},
    {
        timestamps: false
    },
    {
        tableName: "users"
    }

)
user.sync({ force: false });
module.exports = { user };