class ConfirmaID {
    constructor(id) {
        this.id = this.verificaId(id)
       }

    verificaId(id){
        if(id != 0){
            return id
        } else {
            return -1
        }
    }
}

module.exports = ConfirmaID