const express = require('express');
const router = express.Router();

router.get('/dogs',(req, res)=>{
    res.send('All dogs');
})

router.post('/dogs',(req, res)=>{
    res.send('create dogs');
})

router.get('/dogs/:id',(req, res)=>{
    res.send('One dog');
})

router.get('/dogs/:id/edit',(req, res)=>{
    res.send('edit dogs');
})

module.exports = router;
