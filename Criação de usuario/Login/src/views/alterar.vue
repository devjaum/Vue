<script >
    import axios from "axios";
    export default{
        name : "alterarV",
        data(){
            return{
            message : "",
            table: [{}],
            id_: '',
            name: '',
            selected: '',
            visible: false,
            btAlterar: false,
            cor_id: 'black',
            cor_name: 'black'
        }},
        methods:{
            alterar(){
                //Verificando se o btAlterar foi clicado
                if (this.verificar()){
                let id = this.$refs.id.value
                axios.post('http://localhost:3000/'+id+'/update', {
                    "name": this.name
                })
                .then(response =>{
                    response
                    alert("Usuario alterado com sucesso!")
                    this.$refs.name.value = ""
                    this.table = [{}]
                    this.mostrarUser()
                })
                .catch(error =>{
                    if(error.response.status == 400){
                        this.message = error.response.data.message
                    }
                })
                }
                else{
                    this.message = "Preencha todos os campos corretamente"
                }     
            },
            verificar(){
                if(this.name.length <= 3 && this.name.length >= 1){
                        this.message = "Nome inválido"
                        this.cor_name = 'red'
                        return false
                    }
                else if(this.name.length == 0){
                    this.message = ""
                    this.cor_name = ''
                    return false
                }
                else if(this.name[0] === " "){
                    this.message = "Nome inválido"
                    this.cor_name = 'red'
                    return false
                }
                else if(this.$refs.id.value === ""){
                    this.cor_name = 'black'
                    this.verificar_Id()
                    return false
                }
                else{
                    this.message = ""
                    return true
                }   
            },
            mostrarUser(){
                this.table = [{}]
                if(this.table.length === 1){
                    axios.get('http://localhost:3000')
                    .then(response=>{
                    //Passando todos os id para a tabela
                        for (let i = 0; i < response.data.Login.length; i++) {                           
                            this.table.push({
                                id: response.data.Login[i].user.id,
                                name: response.data.Login[i].user.name
                            })
                        }
                        //apagando o elemento 0 da tabela
                        this.table.shift()
                })
                }
                this.visible = true
            },
            verificar_Id(){
                axios.get('http://localhost:3000')
                .then(response=>{
                    if(this.$refs.id.value > response.data.Login.length){
                        this.message = "Id inválido"
                        this.cor_id = "red"
                    }
                    else if(this.$refs.id.value == ""){
                        this.message = "Insira um ID"
                        this.cor_id = "red"
                    }
                    else{
                        this.message = ""
                        this.cor_id = "black"
                    }
                    this.$refs.id.max = response.data.Login.length
                })
            },
            validInput(){
                return this.name.trim() !== ''
            },
            ocultar(){
                this.visible = false
            }
        },
        computed:{
            filterName(){
                try{
                    return this.table.filter(item => {
                        item.table.name
                        })
                }
                catch(error){
                    return this.table
                }
            }
        },
        watch:{
            selected(){                
                this.name = this.selected.split(' ')[2]
                //Pegando o numero do select
                this.id_ = this.selected.split(" ")[0]
                this.cor_id = this.cor_name = 'black'
                this.message = ''
            }
        }
    }
</script>
<template>
    <div>
        <div id="d">
            <h1>
                Alterar Usuario
            </h1>
        <input type="number" min="1" max="2" ref="id" placeholder="ID" 
               v-model="id_" v-on:keyup="verificar_Id" @click="verificar_Id"
               :style="{outlineColor: cor_id,borderColor: cor_id}"
               />
        <p>
        <input ref="name" v-model="name" v-on:keyup="verificar" 
               :style="{outlineColor: cor_name,borderColor: cor_name}"
        />
        </p>
        <h3>
            <p>{{message}}</p>
        </h3>
        <v-btn @click="alterar">
            Alterar
        </v-btn>
        <v-btn @click="mostrarUser()">
            Mostrar Usuario
        </v-btn>
        <h2 v-show="visible">
        <select v-model="selected" size="5">
            <option v-for="(item, index) in filterName" v-bind:key="item.id">
                {{index+1}} - {{item.name}}
            </option>
        </select>
        <button @click="ocultar" >Ocultar</button>
        </h2>
        </div>
    </div>
</template>
<style scoped>
    #d{
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    v-btn{
        margin: 0 0.3em 0.3em 0;
        background: #fff;
        color: black;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration:none;
        font-family:'Roboto',sans-serif;
        font-weight:300;
        text-align:center;
        transition: all 0.2s;
        padding: 0.2em 0.2em;
    }
    h1{
        color: #fff;
        font-size: 30px;
    }
    v-btn:hover{
        background: aqua;
        color: black;
    }
    v-btn + v-btn{
        margin-left: 0.3em;
    }
    input{
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration:none;
        font-family:'Roboto',sans-serif;
        font-weight:300;
        transition: all 0.2s;
        padding: 0.2em 0.2em;
        width: 14.8em;
        height: 2em;
    }
    h3{
        color: red;
        margin-top: -0.5em;
    }
</style>