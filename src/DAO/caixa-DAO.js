class CaixaDAO {
    constructor(bdCaixa) {
        this._bdCaixa = bdCaixa

    }
    select_caixa() {
        return new Promise((resolve, reject) => {
            this._bdCaixa.all('SELECT * FROM CAIXA', (err, linhas) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "pedidos": linhas,
                        "count": linhas.length,
                        "error": false
                    })
                }
            })
        })
    }

    select_caixa_pedido(pedido) {
        return new Promise((resolve, reject) => {
            this._bdCaixa.all(`SELECT * FROM CAIXA where PEDIDO = ${pedido}`, (err, linhas) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "pedidos": linhas,
                        "count": linhas.length,
                        "error": false
                    })
                }
            })
        })
    }

    insert_caixa_pedido(novoPagamento) {
        return new Promise((resolve, reject) => {
            this._bdCaixa.run(`
           INSERT INTO CAIXA (PEDIDO, VALOR)
            VALUES 
           (?, ?)
            `, [novoPagamento.pedido, novoPagamento.valor], (error) => {
                if (error) {
                    reject({
                        "pagemento": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "pagamento": novoPagamento,
                        "erro": false
                    })
                }
            })
        })
    }

    update_caixa_pedido(pedido , atulizaPagamento) {
        return new Promise((resolve, reject) => {
            this._bdCaixa.run(`
           UPDATE CAIXA 
            SET (PEDIDO, VALOR) =
           (?, ?)
           where PEDIDO =
           ${pedido}
            `, [atulizaPagamento.pedido, atulizaPagamento.valor], (error) => {
                if (error) {
                    reject({
                        "pagemento": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "pagamento": atulizaPagamento,
                        "erro": false
                    })
                }
            })
        })
    }


}

module.exports = CaixaDAO