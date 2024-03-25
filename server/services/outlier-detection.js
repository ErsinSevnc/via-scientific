const mathjs = require('mathjs');

//i will decrease the 3 value for the sake of case.
const DEVIATION_TRESHOLD = 0.7;

module.exports = function detectOutliers(gene) {
    const {expressionValues} = gene;

    const mean = mathjs.mean(expressionValues);
    const stdDev = mathjs.std(expressionValues);

    const categorizeExpressions = expressionValues.map((expression, i) => ({
        name: `ex_value_${i + 1}`,
        value: expression
    }));

    const outliers = categorizeExpressions.filter(expression => Math.abs(expression.value - mean) > (DEVIATION_TRESHOLD * stdDev));

    return outliers;
};