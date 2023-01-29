const pool = require('../../db')

const getQuotes = (req, res) => {
  pool.query('SELECT * FROM costanza', (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}
module.exports = {
  getQuotes
}
