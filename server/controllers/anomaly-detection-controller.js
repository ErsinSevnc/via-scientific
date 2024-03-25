const asyncCatcher = require('../utils/async-catcher');
const GeneExpression = require('../models/GeneExpression');
const detectOutliers = require('../services/outlier-detection');

const detectAnomaly = asyncCatcher(async(req, res) => {
    const {genes} = req.body;

    try {
        const matchedGenes = await GeneExpression.find({gene: {$in: genes}}).select('gene expressionValues');
        const outliers = [];
        matchedGenes.forEach(gene => {
            const outlierExpressionValues = detectOutliers(gene);

            if (outlierExpressionValues.length) {
                outliers.push({
                    gene: gene.gene,
                    outlierValues: outlierExpressionValues
                })
            }
        })
        
        res.status(200).send({outliers});
    } catch (e) {
        throw new Error(e);
    }
});

exports.detectAnomaly = detectAnomaly;