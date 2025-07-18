const sequelize = require('../config/db');
const User = require("./User")

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log(' Connection has been established successfully.');

    // Sync all models
    await sequelize.sync({ alter: true }); // alter = like Hibernate update
    console.log(' All models were synchronized successfully.');



  } catch (error) {
    console.error(' Unable to connect to the database:', error);
  }
};

sequelize.sync({ alter: true })

module.exports = connectToDatabase;
