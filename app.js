const express = require('express');
const app = express();
app.use(express.json());
const todoRouter = require('./todoRouter');

app.use('/',todoRouter)

app.listen(5000,(err)=>{
    err ? console.log(err) : console.log('Server Started');
})
