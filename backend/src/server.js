require('./db/connection');
const express = require('express');
// const routes = require('./routes/routes');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors());
// app.use(routes) 

app.listen(5000, (req, res) => {
    console.log('app is running on port 5000');
})

const cadastroSchema = new mongoose.Schema({
    nome: String,
    pass: String
});

const Cadastro = mongoose.model('cadastros', cadastroSchema);

app.post('/cadastro', (req, res) => {
    const { nome, pass } = req.body;

    const novoCadastro = new Cadastro({
        nome: nome, 
        pass: pass
    });

    novoCadastro.save()
        .then(() => {
            res.status(200).json({ message: 'Cadastro concluído com sucesso!' });
        })
        .catch((err) => {
            console.error('Erro ao salvar: ', err);
            res.sendStatus;
        })
        
    console.log(nome, pass);
})

app.get('/display', (req, res) => {
    Cadastro.find({})
        .then(cadastros => {
            res.json(cadastros);
            console.log('Busca realizada com sucesso!');
        })
        .catch(error => {
            res.json('Erro: ', error);
            console.log('Erro ao buscar: ', error);
        });
});