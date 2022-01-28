const productController = require("../controllers/productController.js")

const router = require("express").Router()

router.post('/product',productController.addProduct)
router.get('/products',productController.getProducts)


module.exports = router
