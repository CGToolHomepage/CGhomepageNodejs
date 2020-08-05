var aboutController = function(req, res) {
  res.render('index', { title: 'About' });
}

/* About page. */
module.exports.about = aboutController;