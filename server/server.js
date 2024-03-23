const app = require('express')();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const seedDb = require('./utils/seed-db');

const expressionRoutes = require('./routes/expressions');
const geneAnalysisRouters = require('./routes/gene-analysis');

app.use(express.json());
app.use(cors());
app.use('/expressions', expressionRoutes);
app.use('/gene-analysis', geneAnalysisRouters);

const PORT = process.env.PORT || 8080;
const DB = process.env.MONGO_URL;

mongoose
    .connect(DB)
    .then(() => seedDb())
    .catch(error => console.log(error));

app.listen(PORT, () => {
    console.log(`Server Listening on port: ${PORT}`)
})