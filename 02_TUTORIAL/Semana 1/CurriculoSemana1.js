// Recursos
var express = require('express'); // Recurso para Express - para instalar o Express: npm install express --save

// Definições da URL do endpoint
var hostname = '127.0.0.1';
var port = 3013;

// Cria o servidor
var app = express();

app.get('/', (req, res) => {
	res.write("<h1> Curriculo de Thomas Barton</h1><br><br>")
	res.end("<h2>Nome: Thomas Barton</h2><br><h2>Idade: 18 anos</h2><br><h2>Curso: Ciencias da computacao na Inteli</h2>");
});

// Inicia o servidor
app.listen(port, hostname, () => {
	console.log('Servidor rodando em http://' + hostname + ':' + port);
})




