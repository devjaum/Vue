<script>
import axios from 'axios'
    export default{
        name: 'admUser',
        props: {
            msg: String
        },
        data(){
            return{
                cor: this.msg,
                visible: false,
                message: "",
                validacao: ''
            }
        },
        //resetar a cor 
        methods:{
            adicionar(){
                let name = this.$refs.name.value;
                //Passando os dados para o servidor
                axios.post('http://localhost:3000/add', {
                    "user":{
                        "id":"",
                        "name":name
                    }
                })
                //Verificando o status da requisição
                .then(response => {
                        response
                        alert("O usuario: "+this.$refs.name.value+" foi adicionado com sucesso!")
                        this.$refs.name.value = ""
                })
                //Verificando o status da requisição
                .catch(error => {
                    //Verificando se o status é 400
                    if(error.response.status == 400){
                        //Exibindo a mensagem de erro do servidor
                        this.message = error.response.data.message
                    }
                })
            },
            validar(){
                let name = this.validacao
                //Verificando letra por letra
                if(name.length <= 3 && name.length >= 1){
                    this.cor = 'red'
                    this.message = "Nome inválido"
                    this.visible = true
                    return
                    }
                else if(name.length == 0){
                    this.cor = 'black'
                    this.message = ""
                    this.visible = false
                    return
                }
                for(let i = 0; i < name.length; i++){
                    if(name[i] === " "){
                        this.cor = 'red'
                        this.message = "Nome inválido"
                        this.visible = true
                        return
                    }
                }
                //Verificando se o nome não tem caracteres especiais
                if(name.match(/[^a-zA-Z0-9]/g)){
                    this.cor = 'red'
                    this.message = "Nome inválido"
                    this.visible = true
                    return
                }
                this.cor = 'green'
                this.message = ""
                this.visible = false
                
                
            }
    }
    }
</script>
<template>
    <div>
        <div id="d">
        <h1 :style="{color: 'white'}">Cadastro</h1>
        <div>
        <p :style="{marginBottom:'-3px', color: 'white'}">Nome:
        <input  ref="name" placeholder="Digite o nome" 
        :style="{outlineColor: cor}" v-model="validacao"
        v-on:keyup="validar"
        />
        </p>
            <text v-show="visible" :style="{
                color: cor,
                marginLeft: '9%'
            }">{{message}}</text>
        </div>
        <button @click="adicionar()" :style="{marginTop: '50px'}">Adicionar</button>
        </div>
    </div>
</template>
<style>
    #d{
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    input{
        border-width: 2px;
    }
    button{
        margin: 8px;
        background: #fff;
        color: black;
    }
    button:hover{
        background: aqua;
        color: black;
    }
</style>