const { response } = require('express');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).send("Hello");
})

router.post('/register', (req, res) => {
    res.send({
        message: `Hello, ${req.body.email}! Your user was registered!`
    })
})

module.exports = router;