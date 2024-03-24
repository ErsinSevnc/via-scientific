const asyncCatcher = require('../utils/async-catcher');
const GeneExpression = require('../models/GeneExpression');
const detectOutliers = require('../services/outlier-detection');

const detectAnomaly = asyncCatcher(async(req, res) => {
    try {
        const genes = await GeneExpression.find({}).select('gene expressionValues');
        const outliers = {};
        genes.forEach(gene => {
            const outlierExpressionValues = detectOutliers(gene);

            if (outlierExpressionValues.length) {
                outliers[gene.gene] = outlierExpressionValues;
            }
        })
        
        res.status(200).send({outliers});
    } catch (e) {
        throw new Error(e);
    }
});

exports.detectAnomaly = detectAnomaly;