function routes(app) {
  app.use('/get/new/article', require('./routes/getIdNews'));
  app.use('/delete/article', require('./routes/deleteNew'));
  app.use('/get/news', require('./routes/getNews'));
  app.use('/news/create', require('./routes/newsCreate'));
  return;
}

module.exports = routes;