const Caixa = require('../model/caixa-model.js')

const caixa = (app , bdVerdadeiro) => { 
    app.get('/caixa', (req, res) => {
      bdVerdadeiro.all('SELECT * FROM CAIXA', (err, linhas)=>{
        if(err){
          res.json({"menssagem": err.message, "erro": true})
        } else {
          res.json({"caixa": linhas, "count": linhas.legth, "erro": false})
        }
      })
     
    })
} 

module.exports  =  caixa