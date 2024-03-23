const fs = require('fs');
const mongoose = require('mongoose');
const GeneExpressions = require('../models/GeneExpression');
const mathjs = require('mathjs');

async function seedDb() {
    try {
        const geneExpressions = fs.readFileSync('./data/gene_expression_data.json', 'utf8');
        const data = JSON.parse(geneExpressions);
        const transformedData = data.map(geneExpression => {
            return {
                ...geneExpression,
                variance: mathjs.variance(geneExpression.expressionValues),
                mean: mathjs.mean(geneExpression.expressionValues),
                median: mathjs.median(geneExpression.expressionValues)
            }
        })

        await GeneExpressions.insertMany(transformedData);

    } catch (e) {
        throw new Error(e);
    }
};


module.exports = seedDb;