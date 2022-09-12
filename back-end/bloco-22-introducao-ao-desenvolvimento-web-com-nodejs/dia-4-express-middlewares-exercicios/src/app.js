const express = require('express');
require('express-async-errors');
const errorHandler = require('./middlewares/error');
const activitiesRoutes = require('./routes/activitiesRoutes');
const personsRoutes = require('./routes/personsRoutes');

const app = express();

app.use(express.json());
app.use('/activities', activitiesRoutes);
app.use('/signup', personsRoutes);
app.use(errorHandler);
module.exports = app;