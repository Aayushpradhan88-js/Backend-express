const express = require('express') //First method
//Second method to use express - import express from 'express' 

const app = express()      //Note:- In express app is very powerful. Because it can access all the power of express

const port = 4000         //It is an virtual port we can set as our prefrences like - 4000 or 1000 ...etc

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/github', (req, res) => {
    res.send('aayushdotcom')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
