
class Pagamento {
    
    constructor(pedido, valor) {
        this.pedido = this.verificaPedido(pedido)
        this.valor = this.verificaValor(valor)
    }

    verificaValor(valor){
        if(valor >= 0  || valor !== ''){
            return valor
        }else {
            return -1  
          
        }
    }

    verificaPedido(pedido){
        if(pedido !== "" ){
            return pedido
        }else {
          return 0
        }
    }
}

module.exports = Pagamento