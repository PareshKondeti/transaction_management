const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  transactionType: {
    type: DataTypes.ENUM('DEPOSIT', 'WITHDRAWAL'),
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('PENDING', 'COMPLETED', 'FAILED'),
    defaultValue: 'PENDING',
  },
});

module.exports = Transaction;
