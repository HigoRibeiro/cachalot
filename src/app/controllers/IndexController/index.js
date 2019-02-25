class IndexController {
  index (req, res) {
    res.render('index', { items: ['Higo Ribeiro', 'Diego', 'Claudio'] })
  }

  store (req, res) {
    res.json({ hello: 'world' })
  }
}

module.exports = new IndexController()
