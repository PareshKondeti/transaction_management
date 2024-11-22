const express = require('express');
const sequelize = require('./config/database');
const transactionRoutes = require('./routes/transactions');

const app = express();
const PORT = 5000;

app.use(express.json());

// Use transaction routes
app.use('/api/transactions', transactionRoutes);

// Sync database and start server
sequelize
  .sync({ force: true }) // `force: true` resets the database; remove in production
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err.message);
  });
