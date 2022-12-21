const { Router } = require('express')

const authRouter = require("./authRoute")
const productRouter = require('./productRoute')
const brandRouter = require('./brandRoute')

const router = Router()

router.use('/auth', authRouter)
router.use('/product', productRouter)
router.use('/brand', brandRouter)


module.exports = router