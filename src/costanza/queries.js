const getQuotes = 'SELECT * FROM costanza'
const getQuotesById = 'SELECT * FROM costanza WHERE id = $1'
const getQuotesByName = 'SELECT * FROM costanza WHERE name = $1'
module.exports = {
  getQuotes,
  getQuotesById,
  getQuotesByName
}
