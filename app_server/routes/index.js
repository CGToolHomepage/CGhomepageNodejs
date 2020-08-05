var express = require('express');
var router = express.Router();
var ctrlProducts = require('../controllers/products')
var ctrlOthers = require('../controllers/others')

/* Products page. */
router.get('/', ctrlProducts.homeList);
router.get('/product', ctrlProducts.productInfo);
router.get('/product/review/new', ctrlProducts.addReview);

/* Others page. */
router.get('/', ctrlOthers.about);

module.exports = router;
