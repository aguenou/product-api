const router = require('express').Router();
const Product = require('../src/product.controller');

router.get("/",Product.getProducts);
router.get("/:id",Product.getProductById);
router.post("/",Product.createProduct);
router.put("/:id", Product.updateProduct);
router.delete("/:id", Product.deleteProduct);

module.exports = router;