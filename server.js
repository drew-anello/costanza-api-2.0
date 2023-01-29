const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
app.get('/', (req, res) => {
  res.send('hello world')
})
app.listen(PORT, () => console.log('I was in the Pool! I was in the Pool!'))
