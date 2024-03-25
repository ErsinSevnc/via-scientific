const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeneExpressionSchema = new Schema({
    gene: {
        type: String,
        required: true
    },
    expressionValues: {
        type: [Number],
        required: true
    },
    sampleNames: {
        type: [String],
        required: true
    },
    mean: {
        type: Number,
        required: true
    },
    median: {
        type: Number,
        required: true
    },
    variance: {
        type: Number,
        required: true
    }
})

module.exports = GeneExpression = mongoose.model('gene_expressions', GeneExpressionSchema);