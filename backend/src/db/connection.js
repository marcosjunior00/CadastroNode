const mongoose = require('mongoose');

const user = 'marcos';
const pass = encodeURIComponent('ngXyTgbyaVKVSWJb');

mongoose
    .connect(`mongodb+srv://${user}:${pass}@cluster.qoy59sz.mongodb.net/bdCadastro?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectado com sucesso!');
    })
    .catch((err) => {
        console.log('Erro: ', err);
    })
