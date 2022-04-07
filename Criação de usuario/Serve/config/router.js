const express = require ("express");
const user = require('../src/data/users.json')
const route = express.Router()

route.get('/', (req,res) => {
    return res.json(user)
});

route.post('/add', (req,res) =>{
    const body = req.body
    name = body.user.name
    for (let i = 0; i < name.length; i++) {
        if(name[i] === ' '){
            return res.status(400).json({
                error: 'Nome não pode conter espaço'
            })
        }
    }
    if(body.user.name === ''){
        return res.status(400).json({
            error: 'Dados não foram enviados'
        })
    }
    let max = user.Login.length
    body.user.id = max + 1
    user.Login.push(body)
    saveJson(user)
    return res.status(201).json(user)
})

route.delete('/:id', (req,res) =>{
    const id = req.params.id;
    let del = user["Login"].splice(id,1)
    if(del == 0){
        return res.status(400).json({
            error: 'Usuário não encontrado'
        })
    }
    saveJson(user)
    return res.json(user)
    
})
route.post('/:id/update', (req,res)=>{
    let body = req.body;
    if(!body){
        return res.status(400).json({
            error: "Dados não fornecidos"
        });
    }
    const id = req.params.id;
    //
    if(!user["Login"].find(item => item.user.id == id)){
        return res.status(400).json({
            error: "Usuário não encontrado"
        });
    }
    //Alterando o nome do usuário
    user["Login"].forEach(item =>{
        if(item["user"].id == id){
            item["user"].name = body.name;
        }
    })
    //Se o Id não existir
    
    saveJson(user)
    return res.json(user)
})
//função para salvar o json
function saveJson(user){
    const fs = require('fs');
    fs.writeFile('./src/data/users.json', JSON.stringify(user), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}
module.exports = route