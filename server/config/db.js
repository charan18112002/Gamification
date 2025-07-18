const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gamification', 'root', 'root@123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;