const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Path to SQLite database file
  logging: false,              // Disable SQL logs in the console
});

module.exports = sequelize;
