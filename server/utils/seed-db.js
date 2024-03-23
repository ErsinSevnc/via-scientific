const fs = require('fs');
const mongoose = require('mongoose');
const GeneExpressions = require('../models/GeneExpression');

async function seedDb() {
    const geneExpressions = fs.readFileSync('./data/gene_expression_data.json', 'utf8');
    const data = JSON.parse(geneExpressions);
    await GeneExpressions.insertMany(data);
};


module.exports = seedDb;