const getQuotes = 'SELECT * FROM costanza'
const getQuotesById = 'SELECT * FROM costanza WHERE id = $1'
const getQuotesByName = 'SELECT * FROM costanza WHERE name = $1'
const checkQuoteExist = 'SELECT q FROM costanza q WHERE q.quote = $1'
const addQuote =
  'INSERT INTO costanza (quote, name, season, episode) VALUES ($1, $2, $3, $4)'
const deleteQuote = 'DELETE FROM costanza WHERE id = $1'
module.exports = {
  getQuotes,
  getQuotesById,
  getQuotesByName,
  checkQuoteExist,
  addQuote,
  deleteQuote
}
