const express = require('express');
const router = express.Router();
const axios = require('axios');
const connectBD = require('../middlewares/connectBD');
const articleSchema = require('../models/articles')

router.post('/', connectBD, async function (req, res) {
  try {
    // #swagger.tags = ['Articles']
    // #swagger.description = "Endpoint to create articles and send to the database."
    const responseApi = await axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.KEY_API}`)

    if (responseApi.status === 200 && responseApi.data.status == 'ok') {
      const dataRes = responseApi.data
      const articlesRes = dataRes.articles
      const addedArticles = [];

      for (const element of articlesRes) {
        let sourceId = element.source.id
        let sourceName = element.source.name
        let author = element.author
        let title = element.title
        let description = element.description
        let url = element.url
        let urlToImage = element.urlToImage
        let publishedAt = element.publishedAt
        let content = element.content

        const existingArticle = await articleSchema.findOne({ title });

        if (!existingArticle) {
          await articleSchema.create({ sourceId, sourceName, author, title, description, url, urlToImage, publishedAt, content });
          addedArticles.push(title);
        }
      };
      if (addedArticles.length > 0) res.status(200).json({ status: 'ok', statusMessage: 'Articles added successfully', addedArticles });
      else res.status(200).json({ status: 'ok', statusMessage: 'No new articles added' });


    } else console.error('Não foi possível obter a resposta da requisição');
  }
  catch (error) {
    console.error(`Erro: ${error}`);
  }
});

module.exports = router;