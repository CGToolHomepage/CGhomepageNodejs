var homelistController = function(req, res) {
  res.render('index', { title: '청계천 공구' });
}
var productInfoController = function(req, res) {
  res.render('index', { title: 'Product Information' });
}
var addReviewController = function(req, res) {
  res.render('index', { title: 'Add review' });
}

/* Home page. */
module.exports.homeList = homelistController;


/* Product information page. */
module.exports.productInfo = productInfoController;


/* New review page. */
module.exports.addReview = addReviewController;
