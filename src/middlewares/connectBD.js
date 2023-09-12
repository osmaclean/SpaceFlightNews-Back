const MONGOOSE = require('mongoose');

async function connectBD(req, res, next = null) {
  try {
    await MONGOOSE.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado ao Banco de Dados!');
    try { next(); } catch { };
    return MONGOOSE
  } catch (error) {
    return console.error(`Erro: ${error}`)
  }
}

module.exports = connectBD;