const pool = require('../../db')
const queries = require('./queries')

const getQuotes = (req, res) => {
  pool.query(queries.getQuotes, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}
const getQuoteById = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getQuotesById, [id], (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}
module.exports = {
  getQuotes,
  getQuoteById
}
