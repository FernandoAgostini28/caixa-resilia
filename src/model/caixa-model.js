//var id = 0

class Pagamento {

    constructor(pedido, valor) {
        this.pedido = this.verificapedido(pedido)
        this.valor = this.vereficaValor(valor)
    }

    vereficaValor(valor){
        if(valor !== "" ){
            return valor
        }else {
            console.log('erro valor')
        }
    }

    verificapedido(pedido){
        if(pedido !== "" ){
            return pedido
        }else {
            console.log('erro pedido')
        }
    }
}

module.exports = Pagamento