const express = require('express');
const router = express.Router();
const connectBD = require('../middlewares/connectBD');
const ARTICLES = require('../models/articles')


router.get('/', connectBD, async function (req, res) {
  try {

  } catch (error) {
    return console.error(`Erro: ${error}`);
  }
});

module.exports = router;