//var id = 0

class Pagamento {
    constructor(nome, email, senha, ) {
        this.id  = id++
        this.nome= nome
        this.email = email
        this.senha = this.vereficaSenha(senha)
    }

    vereficaSenha(senha){
        if(senha.length <= 6 ){
            return senha
        }else {
            console.log('erro')
        }
    }
}

module.exports = Pagamento