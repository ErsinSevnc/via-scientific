const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
 
    res.send('hit expressions route');
});

module.exports = router;