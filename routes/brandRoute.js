const {Router} = require("express")
const brandController = require('../controllers/brandController')

const router = Router()

router.post('/create', brandController.createBrand)
router.post('/delete', brandController.deleteBrand)
router.post('/update', brandController.updateBrand)

module.exports = router