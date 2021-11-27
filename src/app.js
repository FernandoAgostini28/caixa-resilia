const express = require('express')
const app = express()
const port  = 3003
const caixa  = require('./controller/caixa-controller')
//const bd =  require('./infra/bd')
//const sqlite3 = require('sqlite3').verbose();
//const bd = require('./src/infra/db')
const bdVerdadeiro = require('./infra/sqlite-db');
// Para acessar middleware para uma rota exata
// app.use('/user/:id', function (req, res, next) {
//   console.log('Request Type:', req.method);
//   next();
// });


app.use(express.json())
app.use((req, res, next) => {
  console.log(req.body)
  const body = req.body
  // if(!body.usuarios){
  //   res.status(403).send('Quem é vc')
  // }
  // if(body.usuarios === "Fer") {
  //   res.status(403).send('Vc não pode logar')
  // }
  // else {
  next()
 //}
  
})

app.get('/', (req, res)=>{
       
    res.json({"requisicao": "Requisição aceita"})
   
  })

caixa(app , bdVerdadeiro)
//Lista de rotas

// Middlewares





app.listen(port, () =>{
  console.log(`servidor rodando: http://localhost:${port}`)
})

