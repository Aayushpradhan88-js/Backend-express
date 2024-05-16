const express = require('express')
const app = express()

app.set("viewengine","ejs")

app.get('/', (req, res) => {
  res.send('<h1> Hello ejs </h1>')
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})