const express = require('express');
const {getMatchedGenes} = require('../controllers/gene-expression-controller');

const router = express.Router();

router.post('/', getMatchedGenes);

module.exports = router;