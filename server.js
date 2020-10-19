// Importar dependência
const express = require('express');
const path = require('path');

const pages = require('./pages.js');

// Iniciando o express
const server = express()

// Utilizar body do req
.use(express.urlencoded({ extended: true }))
// Utilizando os arquivos estáticos e configurar template engine
server
.use(express.static('public'))
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// Rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// Ligar o servidor
server.listen(5500)

