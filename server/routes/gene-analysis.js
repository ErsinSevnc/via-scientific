const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {

    res.send('hit gene analysis route');
});

module.exports = router;