const express = require('express');
const router = express.Router();
const {calculateGeneAnalysis} = require('../controllers/gene-analysis-controller')

router.post('/', calculateGeneAnalysis);

module.exports = router;