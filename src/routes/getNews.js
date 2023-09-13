const express = require('express');
const router = express.Router();
const connectBD = require('../middlewares/connectBD')
const ARTICLES = require('../models/articles')

/* GET users listing. */
router.get('/', connectBD, async function (req, res) {
  try {
    // #swagger.tags = ['Artigos']
    // #swagger.description = "Endpoint para obter todos os artigo do banco de dados."
    const responseDB = await ARTICLES.find({});

    res.status(200).json({ status: "ok", statusMessage: "Articles listed successfully!", response: responseDB })
  } catch (error) {
    return console.error(`Erro: ${error}`)
  }
});

module.exports = router;