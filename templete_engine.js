const express = require('express')
const app = express()

app.set("viewengine","ejs")

app.get('/', (req, res) => {
  res.send('index')
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})