// Para começar a vizualizar alguma coisa no browser vamos :

// 1° Importar o express dentro de uma var chamada express 
const express = require('express');

// 2° Vamos declarar a var app que é igual a express, pronto sua aplicação esta criada 
const app = express();

// 3° com a variavel app. temos varias opções para observar as rotas, vamos usar hoje a get
// O método get recebe como primeiro parametro qual endereço queremos observar 
// o segundo parametro que ele recebe é uma função (requisação, reposta) => {}
// A função acima precisa retornar alguma coisa:
// vamos colocar o return, todo retorno que fazemos de uma rota precisa sempre utilizar o reponse 
// porque o response que devolve uma resposta para parte visual
// send permite retornamos um texto 
app.get('/projects', (request, response) => {
    return response.json({ message: 'Hello World'});
    
});

// se colocarmos apenas / sem o endereço roda do mesmo jeito 
// nunca iremos retornar tambem um send(texto) diretamente 
// vamos retornar um json ou um {vetor de objetos} ou [array]

// porta finalizada, para criar outras é so ir mudando o final
app.listen(3333);