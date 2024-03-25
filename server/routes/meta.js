const express = require('express');
const router = express.Router();
const {getGeneNames} = require('../controllers/meta-controller')

router.get('/', getGeneNames);

module.exports = router;