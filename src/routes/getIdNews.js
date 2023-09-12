const express = require('express');
const router = express.Router();
const connectBD = require('../middlewares/connectBD');
const ARTICLES = require('../models/articles');


router.get('/:id', connectBD, async function (req, res) {
  try {
    let idArticle = req.params.id;
    const checkArticles = await ARTICLES.findOne({ _id: idArticle });

    if (!checkArticles) throw new Error('Article not found!');

    res.status(200).json({
      status: "ok",
      statusMessage: "Article listed successfully",
      response: checkArticles,
    });

  } catch (error) {
    return console.error(`Erro: ${error}`);
  }
});

module.exports = router;