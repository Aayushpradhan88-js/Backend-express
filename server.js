const express = require('express') //First method
//Second method to use express - import express from 'express' 

const app = express()      //Note:- In express app is very powerful. Because it can access all the power of express

// app.use(function(req, res, next) => {
//   console.log(req)
//   next()
// })

app.get('/youtube', (req, res) => {
  res.get('Open youtube')
})
 
app.get('/', (req, res) => {
  res.get('hello world');
})

app.get('/github', (req, res) => {
  res.send('aayushdotcom')
})

app.get('/profile', (req, res) => {
  res.send('hello aayush');
})

app.get('/profile/username', (req, res) =>{
  res.send('hello abishpradhan');
})

const port = 3000;//It is an virtual port we can set as our prefrences like - 4000 or 1000 ...etc

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
