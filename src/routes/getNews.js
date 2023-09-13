const express = require('express');
const router = express.Router();
const connectBD = require('../middlewares/connectBD')
const articles = require('../models/articles')

router.get('/', connectBD, async function (req, res) {
  try {
    // #swagger.tags = ['Articles']
    // #swagger.description = "Endpoint to get all articles from the database."
    const responseDB = await articles.find({});

    res.status(200).json({ status: "ok", statusMessage: "Articles listed successfully!", response: responseDB })
  } catch (error) {
    return console.error(`Erro: ${error}`)
  }
});

module.exports = router;