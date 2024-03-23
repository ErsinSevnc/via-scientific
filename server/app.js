const app = require('express')();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const seedDb = require('./utils/seed-db');

const expressionRoutes = require('./routes/expressions');
const geneAnalysisRouters = require('./routes/gene-analysis');
const genesMeta = require('./routes/meta');

app.use(express.json());
app.use(cors());
app.use('/genes', genesMeta);
app.use('/expressions', expressionRoutes);
app.use('/gene-analysis', geneAnalysisRouters);

const DB = process.env.MONGO_URL;

mongoose
    .connect(DB)
    .then(() => seedDb())
    .catch(error => console.log(error));


module.exports = app;