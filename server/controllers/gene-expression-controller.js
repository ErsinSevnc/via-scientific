const asyncCatcher = require('../utils/async-catcher');
const GeneExpresison = require('../models/GeneExpression');

const getMatchedGenes = asyncCatcher(async(req, res) => {
    const {genes} = req.body;
    const matchedGenes = await GeneExpresison.find({gene: {$in: genes}})

    if (matchedGenes.length) {
        const response = matchedGenes.map(({gene, expressionValues}) => ({gene, expressionValues }));
        res.status(200).send(response);
        return;
    }

    res.status(404).send({message: 'Genes not found'});
})

exports.getMatchedGenes = getMatchedGenes;