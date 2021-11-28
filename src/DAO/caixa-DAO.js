class CaixaDAO {
        constructor(bdCaixa){
            this._bdCaixa=bdCaixa
        
    }
    select_caixa() {
        return new Promise((resolve, reject) => {
            this._bdCaixa.all('SELECT * FROM CAIXA', (err, rows) => {
                if (err) {
                    reject(({ "mensagem": err.message, "error": true }))
                } else {
                    resolve({
                        "pedidos": rows,
                        "count": rows.length,
                        "error": false
                    })
                }
            })
        }
        )
    }
   
}

module.exports = CaixaDAO