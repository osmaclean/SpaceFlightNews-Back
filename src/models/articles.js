const mongoose = require('mongoose');

const esquema = new mongoose.Schema({
  sourceId: {
    type: String,
    required: 'É obrigatório!',
  },
  sourceName: {
    type: String,
    required: 'É obrigatório!',
  },
  author: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  urlToImage: {
    type: String,
  },
  publishedAt: {
    type: String,
  },
  content: {
    type: String,
  },

}, { timestamps: true });

const EsquemaArticle = mongoose.models.Article || mongoose.model('Article', esquema);

module.exports = EsquemaArticle;