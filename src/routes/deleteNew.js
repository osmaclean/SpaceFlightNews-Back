const express = require('express');
const router = express.Router();
const article = require('../models/articles');
const connectDB = require('../middlewares/connectBD');

router.delete('/:id', connectDB, async function (req, res) {
  try {
    // #swagger.tags = ['Article']
    // #swagger.description = "Endpoint to delete an article in the database."
    let idArticle = req.params.id;
    const checkArticles = await article.deleteOne({ _id: idArticle });

    if (!checkArticles) res.status(404).json({ message: "Article not found" });

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