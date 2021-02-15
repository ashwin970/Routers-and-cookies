const express = require('express');
const router = express.Router();



router.get('/secret',(req, res)=>{

    res.send('top secret');
})


router.get('/delete',(req, res)=>{
    res.send('deleted');
})

module.exports = router;