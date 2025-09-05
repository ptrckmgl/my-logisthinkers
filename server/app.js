// To run this type in CLI: node app.js
// Go to http://localhost:4000/
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
