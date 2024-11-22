const express = require('express');
const Transaction = require('../models/Transaction');
const router = express.Router();

// Create a new transaction
router.post('/', async (req, res) => {
  const { amount, transactionType, userId } = req.body;
  try {
    const transaction = await Transaction.create({ amount, transactionType, userId });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve all transactions for a user
router.get('/', async (req, res) => {
  const { userId } = req.query;
  try {
    const transactions = await Transaction.findAll({ where: { userId } });
    res.status(200).json({ transactions });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve a specific transaction by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findByPk(id);
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update transaction status
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const transaction = await Transaction.findByPk(id);
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
    transaction.status = status;
    await transaction.save();
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
