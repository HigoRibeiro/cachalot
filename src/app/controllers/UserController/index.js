class IndexController {
  create (req, res) {
    res.render('auth/signup')
  }
}

module.exports = new IndexController()
