const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
 
    res.send('hit expressions route');
});

module.exports = router;