function routes(app) {
  app.use('/users', require('./routes/users'));
  app.use('/news', require('./routes/news'));
  return;
}

module.exports = routes;