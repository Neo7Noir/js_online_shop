const {Router} = require("express")
const authController = require("../controllers/authController")
const authValid = require('../middleware/authValid')

const router = Router()

router.post('/signup', authController.signupPost)
router.post('/login', authController.loginPost)
router.get('/secret',authValid.checkUser, authController.secretGet)
router.get('/adminsecret', authValid.checkRole ,authController.adminSecret)

module.exports = router