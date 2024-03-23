const asyncCatcher = require('../utils/async-catcher');
const GeneExpresison = require('../models/GeneExpression');

const getGeneNames = asyncCatcher(async (req, res) => {
    try {
        const genes = await GeneExpresison.find({}).select('gene -_id');
        
        if (genes) {
            res.status(200).send(genes);
            return;
        };

        res.status(404).send('Gene data is empty');
    } catch (e) {
        throw new Error(e);
    }
})

exports.getGeneNames = getGeneNames;