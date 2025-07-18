const express = require('express');
const connectToDatabase = require('./models');
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/userRoutes")

const app = express();

app.use(express.json());
app.use('/api',authRoutes);
app.use('/api',userRoutes);




// Test DB connection
connectToDatabase();

// You’ll later add routes here

module.exports = app;
