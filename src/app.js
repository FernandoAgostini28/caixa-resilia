const express = require('express')
const app = express()
const cors = require('cors')
const caixa  = require('./controllers/caixa-controller')
const bdCaixa = require('./infra/sqlite-db');
// Para acessar middleware para uma rota exata
// app.use('/user/:id', function (req, res, next) {
//   console.log('Request Type:', req.method);
//   next();
// });

app.use(cors());
app.use(express.json())
app.use((req, res, next) => {
const body = req.body
next()

  
})



caixa(app, bdCaixa)
//Lista de rotas

// Middlewares

module.exports = app;





