const Pagamento = require('../model/caixa-model.js')
const Caixa_DAO = require('../DAO/caixa-DAO')

const  caixa = (app, bdCaixa) => {
    const caixa_Dao = new Caixa_DAO(bdCaixa);
    app.get('/caixa', async (req, res) => {
        try{
            const respCaixa = await  caixa_Dao.select_caixa();
            res.status(200).json(respCaixa)
        }catch {

        }
        res.status(200).json(await caixa_Dao.selectCaixa(bdCaixa))
    })

    // app.get('/caixa/:pedido', (req, res) => {
    //     const pedido = req.params.pedido
    //     bdCaixa.all(`SELECT * FROM CAIXA where PEDIDO = ${pedido}`, (err, linhas) => {
    //         if (err) {
    //             res.json({ "menssagem": err.message, "erro": true })
    //         } else {
    //             res.json({ "Pedido": linhas, "count": linhas.legth, "erro": false })
    //         }
    //     })

    // })

    // app.post('/caixa', (req, res) => {
    //     const body = req.body
    //     console.log(body)
    //     const novoPagamento = new Pagamento(body.PEDIDO, body.VALOR)
    //     //console.log(novoPagamento)
        
    //     bdCaixa.run(`
    //     INSERT INTO CAIXA (PEDIDO, VALOR)
    //     VALUES 
    //         (?, ?)
    //     `, [novoPagamento.pedido, novoPagamento.valor], (err) => {
    //       if(err){
    //         res.json({"menssagem": err.message, "erro": true})
    //       } else {
    //         res.json({"Status": 200, "erro": false})
    //       }
    //     })
       
    //   })

} 

module.exports  =  caixa