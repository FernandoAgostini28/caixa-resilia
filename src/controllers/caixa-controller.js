const Pagamento = require('../model/caixa-model.js')
const Caixa_DAO = require('../DAO/caixa-DAO')

const caixa = (app, bdCaixa) => {
    const caixa_Dao = new Caixa_DAO(bdCaixa);
    app.get('/caixa', async (req, res) => {
        try {
            const respCaixa = await caixa_Dao.select_caixa();
            res.status(200).json(respCaixa)
        } catch (error) {
            res.status(404).json({ error })
        }
        //res.status(200).json(await caixa_Dao.selectCaixa(bdCaixa))
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

    app.get('/caixa/:pedido', async (req, res) => {
        try {
            const pedido = req.params.pedido
            const respCaixaPedido = await caixa_Dao.select_caixa_pedido(pedido);
            res.status(200).json(respCaixaPedido)
        } catch (error) {
            res.status(404).json({ error })
        }
        //res.status(200).json(await caixa_Dao.selectCaixa(bdCaixa))
    })

    app.post('/caixa', async (req, res) => {
        const body = req.body
        try {
            
            const novoPagamento = new Pagamento(body.PEDIDO, body.VALOR)
            const respNovoPedido = await caixa_Dao.insert_caixa_pedido(novoPagamento);
            res.status(200).json(respNovoPedido)
        } catch (error) {
            res.status(404).json({ error })
        }

    })

    app.put('/caixa/:pedido', async (req, res) => {
        const pedido = req.params.pedido 
        const body = req.body
        try {
            
            const novoPagamento = new Pagamento(body.PEDIDO, body.VALOR)
            const respNovoPedido = await caixa_Dao.update_caixa_pedido(pedido, novoPagamento);
            res.status(200).json(respNovoPedido)
        } catch (error) {
            res.status(404).json({ error })
        }

    })

    app.delete('/caixa/:id', async (req, res) => {
        const id = req.params.id 
        console.log(id)
        //const body = req.body
        try {
            const removePedido = await caixa_Dao.remove_caixa_pedido(id);
            res.status(200).json(removePedido)
        } catch (error) {
            res.status(404).json({ error })
        }

    })

}

module.exports = caixa