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

    select_caixa_id(id) {
        return new Promise((resolve, reject) => {
            this._bdCaixa.all(`SELECT * FROM CAIXA where ID = ${id}`, (err, linhas) => {
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
           console.log("pedido banco",pedido)
            this._bdCaixa.all(`SELECT * FROM CAIXA where PEDIDO = "${pedido}"`, (err, linhas) => {
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

    update_caixa_pedido(pedido, novoPagamento) {
        return new Promise((resolve, reject) => {
            this._bdCaixa.run(`
            UPDATE  CAIXA SET (PEDIDO, VALOR) =
           (?, ?)
            where PEDIDO =
           ${pedido}
            `, [novoPagamento.pedido, novoPagamento.valor], (error) => {
                if (error) {
                    reject({
                        "pagemento": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "pagemento": novoPagamento,
                        "message":  "alterado com sucesso!",
                        "erro": false
                    })
                }
            })
        })
    }
    remove_caixa_pedido(id) {
        return new Promise((resolve, reject) => {
            this._bdCaixa.run(`
            DELETE FROM CAIXA 
           where ID =
           ${id}
            `, (error) => {
                if (error) {
                    reject({
                        "pagemento": error.message,
                        "erro": true
                    })
                } else {
                    resolve({
                        "message": "removido com sucesso!",
                        "erro": false
                    })
                }
            })
        })
    }


}

module.exports = CaixaDAO