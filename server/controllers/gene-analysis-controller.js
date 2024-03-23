const asyncCatcher = require('../utils/async-catcher');
const GeneExpresison = require('../models/GeneExpression');

const calculateGeneAnalysis = asyncCatcher(async(req, res) => {
    const {gene} = req.body;
    const matchedGene = await GeneExpresison.findOne({gene})

    if (matchedGene) {
        res.status(200).send(matchedGene)
        return;
    }

    res.status(404).send('Gene not found');
})

exports.calculateGeneAnalysis = calculateGeneAnalysis;