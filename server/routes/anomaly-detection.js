const express = require('express');
const {detectAnomaly} = require('../controllers/anomaly-detection-controller');

const router = express.Router();

router.post('/', detectAnomaly);

module.exports = router;