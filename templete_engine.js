const express = require('express')
const app = express()

//Connecting to ejs (similar to html)
app.set("viewengine","ejs")

//Routing 
app.get('/', (req, res) => {
  res.send('index')
})

//Virtual port at local machine
const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
