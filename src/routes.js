function routes(app) {
  app.use('/get/news', require('./routes/getNews'));
  app.use('/news/create', require('./routes/newsCreate'));
  return;
}

module.exports = routes;