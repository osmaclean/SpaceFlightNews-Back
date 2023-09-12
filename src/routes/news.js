const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET news listing. */
router.get('/', async function (req, res) {
  axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.KEY_API}`)
    .then(response => {
      if (response.status === 200) {



        const DATA = response.data



      } else {
        console.error('Não foi possível obter a resposta da requisição');
      }
    })
    .catch(error => {
      console.error(`Erro: ${error}`);
    })
});

module.exports = router;