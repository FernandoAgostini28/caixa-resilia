#  Stack Pub
## API REST para Caixa

## Vc vai precisar 
Editor de Texto,
Node js,
Express,
SqLite3,
cors,

## Comando git para clonar o projeto😎
git clone <caminho do arquivo>

## Comando para iniciar o projeto
npm init

## Comando para instalar as dependências
npm install

## Comando para inicializar o servidor 
npm run server
caminho hattp://localhost:3000

## Rotas possiveis
### Busca todas as notas
GET  http://localhost:3003/caixa
`{
  "pedidos": [
    {
      "ID": 7,
      "PEDIDO": "201125bb1",
      "VALOR": 25
    },
    {
      "ID": 8,
      "PEDIDO": "20235A",
      "VALOR": 15.25
    },
  }
### Buscar a nota pelo pedido
GET http://localhost:3003/caixa/<"pedido">
`{
  "pedidos": [
    {
      "ID": 8,
      "PEDIDO": "20235A",
      "VALOR": 15.25
    }
  ],
  "count": 1,
  "error": false
}`
### Cria uma nota
POST http://localhost:3003/caixa
`{ 
	"PEDIDO":"20261",
	"VALOR":375.50
}`
### Atualização total da nota 
PUT http://localhost:3003/caixa/<"pedido">
### Deleta uma nota
`
  { 
	"PEDIDO":"201125bb1",
	"VALOR":25.0
}`
DELETE http://localhost:3003/caixa/<'id'>
`  {
  "message": "removido com sucesso!",
  "erro": false
}`

 

