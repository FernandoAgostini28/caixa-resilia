
/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')
const db = new sqlite3.Database(caminhoArq);

//==== Usuários
const CAIXA_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CAIXA" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "PEDIDO" varchar(64),
    "VALOR" real
  );`;

const ADD_CAIXA_DATA = `
INSERT INTO CAIXA (ID, PEDIDO, VALOR)
VALUES 
    (1, '201125', 250.00),
    (2, '201126', 150.00),
    (3, '201127', 25.00)
`

function criaTabelaCaixa() {
    db.run(CAIXA_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}


function populaTabelaCaixa() {
    db.run(ADD_CAIXA_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}


db.serialize( ()=> {
    criaTabelaCaixa();
    populaTabelaCaixa();
   
});