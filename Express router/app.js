const express = require('express');
const app = express();
const shelterRouter = require('./routes/shelter');
const dogsRouter = require('./routes/dogs');
const adminRouter = require('./routes/admin');

app.use((req, res, next)=>{
    if(req.query.isAdmin){
        next();
    }
    res.send('invalid');
})

app.use('/',adminRouter);
app.use('/',shelterRouter);
app.use('/',dogsRouter);

app.listen(3000,()=>{
    console.log('listening');
})