const express = require('express');
const router = express.Router();
const ARTICLES = require('../models/articles');
const connectDB = require('../middlewares/connectBD');

router.delete('/:id', connectDB, async function (req, res) {
  try {
    let idArticle = req.params.id;
    const checkArticles = await ARTICLES.findOne({ _id: idArticle }).deleteOne({ _id: idArticle });

    if (!checkArticles) throw new Error('Article not found!');

    res.status(200).json({
      status: "ok",
      statusMessage: "Article deleted successfully",
      response: checkArticles
    })

  } catch (error) {
    return console.error(`Erro: ${error}`)
  }
})

module.exports = router;