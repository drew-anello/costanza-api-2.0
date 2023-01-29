const getQuotes = 'SELECT * FROM costanza'
const getQuotesById = 'SELECT * FROM costanza WHERE id = $1'

module.exports = {
  getQuotes,
  getQuotesById
}
