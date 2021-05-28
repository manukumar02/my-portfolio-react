const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.get('/', (req, res, next) => {
  res.send('API is running');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in mode ${process.env.NODE_ENV} on port ${PORT}`);
});