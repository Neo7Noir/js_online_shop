const {Router} = require("express")
const prodController = require('../controllers/productController')

const router = Router()

router.post('/create', prodController.createProduct)
router.post('/delete', prodController.deleteProduct)
router.post('/update', prodController.updateProduct)

module.exports = router