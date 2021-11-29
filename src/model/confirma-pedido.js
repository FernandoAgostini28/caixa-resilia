class ConfirmaPedido {
    constructor(pedido) {
        this.pedido = this.verificaId(pedido)
       }

    verificaId(pedido){
        if(pedido != 0){
            return pedido
        } else {
            return -1
        }
    }
}

module.exports = ConfirmaPedido