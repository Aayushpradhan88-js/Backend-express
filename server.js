const express = require('express') //First method
//Second method to use express - import express from 'express' 

const app = express() //Note:- In express app is very powerful. Because it can access all the power of express

// MiddleWare code
// app.use(function(req, res, next) => {
//   console.log(req)
//   next()
// })

app.get('/', (req, res) => {
  res.get('hello world')
})

app.get('/youtube', (req, res) => {
  res.get('Open youtube')
})

// dynamic routing -- adding multiple profile in one time code

app.get('/profile', (req, res) => {
  res.send('aayush')
})

// if we write /profile/abish - No error & /profile/aayush - error 
app.get('/profile/abish', (req, res) =>{
  res.send('abishpradhan')
})

// if i write /profile/:username ([ : -> params ] -- it means we can write anybody name like /profile/aayush or /profile/asmita ...)
app.get('/profile/:username', (req,res) => {
  res.send('new username added ')
})

app.get('/profile/:user', (req,res) => {
  res.send(`Hello my name is ${req.params.user}`) // now it is fully ready to write any name in /... route the output  
                                                 //will be Hello my name is ......
})

//In conclusion to make dynamic routing we can use (:) at that place  where we want to make it dynamic, and to access the value req.params.     forExample:- 
app.get('/author/book/issued/:users', (req, res) => {
  res.send(`The reviewer is ${req.params.users} `)
})














const port = 3000;//It is an virtual port we can set as our prefrences like - 4000 or 1000 ...etc
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
