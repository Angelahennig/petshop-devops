const http = require('http');

// simulação de banco de dados
const pets = [
  { id: 1, nome: "Bolinha", especie: "Cachorro", raca: "Labrador" },
  { id: 2, nome: "Sagwa", especie: "Gato", raca: "Siamês" },
  { id: 3, nome: "Ted", especie: "Cachorro", raca: "Bulldog" }
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/pets' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify(pets));
  } else if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ 
      mensagem: "Bem-vindo ao Petshop API!", 
      instrucoes: "Acesse /pets para ver a lista de animais." 
    }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ erro: "Rota não encontrada" }));
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Teste de alerta Discord.