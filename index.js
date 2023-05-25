var fs = require("fs")
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let content = fs.readFileSync('input.txt').toString();

  console.log(content)

  res.send(content.toString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})