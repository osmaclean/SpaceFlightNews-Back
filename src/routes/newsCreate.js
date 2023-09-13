const express = require('express');
const router = express.Router();
const axios = require('axios');
const connectBD = require('../middlewares/connectBD');
const articleSchema = require('../models/articles')


/* GET news listing. */
router.post('/', connectBD, async function (req, res) {
  try {
    // #swagger.tags = ['Artigos']
    // #swagger.description = "Endpoint para criar os artigos e enviar para o banco de dados."
    const RESPONSE_API = await axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.KEY_API}`)

    if (RESPONSE_API.status === 200 && RESPONSE_API.data.status == 'ok') {
      const DATA = RESPONSE_API.data
      const ARTICLES = DATA.articles

      ARTICLES.forEach(element => {
        let sourceId = element.source.id
        let sourceName = element.source.name
        let author = element.author
        let title = element.title
        let description = element.description
        let url = element.url
        let urlToImage = element.urlToImage
        let publishedAt = element.publishedAt
        let content = element.content

        articleSchema.create({ sourceId, sourceName, author, title, description, url, urlToImage, publishedAt, content })
      });
      res.status(200).json({ status: 'ok', statusMessage: 'Articles added successfully' });

    } else {
      console.error('Não foi possível obter a resposta da requisição');
    }
  }
  catch (error) {
    console.error(`Erro: ${error}`);
  }
});

module.exports = router;