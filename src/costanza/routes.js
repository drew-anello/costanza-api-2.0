const { Router } = require('express')
const controller = require('./controller')

const router = Router()

router.get('/', controller.getQuotes)
router.post('/', controller.addQuote)
// router.get('/:id', controller.getQuoteById)
router.get('/:name', controller.getQuotesByName)

module.exports = router
