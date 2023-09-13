const express = require('express');
const router = express.Router();
const connectBD = require('../middlewares/connectBD');
const articles = require('../models/articles');


router.get('/:id', connectBD, async function (req, res) {
  try {
    // #swagger.tags = ['Article']
    // #swagger.description = "Endpoint to get an article from the database."
    let idArticle = req.params.id;
    const checkArticles = await articles.findOne({ _id: idArticle });

    if (!checkArticles) res.status(404).json({ message: "Article not found" });

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