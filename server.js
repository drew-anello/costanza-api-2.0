const express = require('express')
const app = express()

const costanzaRoutes = require('./src/costanza/routes')
require('dotenv').config()
const PORT = process.env.PORT
app.get('/', (req, res) => {
  res.send('hello world')
})
app.use('/api/v1/costanza', costanzaRoutes)
app.listen(PORT, () => console.log('I was in the Pool! I was in the Pool!'))
