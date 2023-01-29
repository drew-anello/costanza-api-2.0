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
    if (error) throw 'unable to find id'
    res.status(200).json(results.rows)
  })
}
const getQuotesByName = (req, res) => {
  const name = req.params.name
  pool.query(queries.getQuotesByName, [name], (error, results) => {
    if (error) throw 'unable to pass name'
    res.status(200).json(results.rows)
  })
}
const addQuote = (req, res) => {
  const { quote, name, season, episode } = req.body
  // check if quote exsis
  pool.query(queries.checkQuoteExist, [quote], (error, results) => {
    if (results.rows.length) {
      res.send('quote is already in Database')
    }
  })
}
module.exports = {
  getQuotes,
  // getQuoteById,
  getQuotesByName,
  addQuote
}
