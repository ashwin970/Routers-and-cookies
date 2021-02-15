const express = require('express');
const router = express.Router();

router.get('/shelter',(req, res)=>{
    res.send('All shelters');
})

router.post('/shelter',(req, res)=>{
    res.send('create shelters');
})

router.get('/shelter/:id',(req, res)=>{
    res.send('One shelter');
})

router.get('/shelter/:id/edit',(req, res)=>{
    res.send('edit shelters');
})

module.exports = router;
