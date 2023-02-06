const express = require('express')
const cors = require('cors')
const app = express()

const costanzaRoutes = require('./src/costanza/routes')
require('dotenv').config()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('hello world')
// })
// app.use('/api/v1/costanza', costanzaRoutes)
app.use('/', costanzaRoutes)
app.listen(PORT, () => console.log('I was in the Pool! I was in the Pool!'))
