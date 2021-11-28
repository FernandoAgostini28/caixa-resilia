class CaixaDAO {

    slectCaixa() {
        return new Promise((resolve, reject) => {
            pedidosDb.all('SELECT * FROM CAIXA', (err, rows) => {
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