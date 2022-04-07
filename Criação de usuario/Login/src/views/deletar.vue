<script>
    import axios from 'axios'
    export default{
        name : 'app',
        data(){
            return{
                message: '',
                table: [{}],
                id:'',
                selected:'',
                visible: false,
                cor : 'black'
            }
        },
        methods:{
            deletar(){
                let id = this.$refs.id.value
                id = Number(id) - 1
                axios.delete('http://localhost:3000/'+id)
                .then(response=>{
                    response;
                    alert("Usuario removido com sucesso!");
                    this.$refs.id.value = ""
                    this.table = [{}];
                    this.message = "";
                    this.id = "";
                    this.mostrarUser();
                    
                })
                .catch(error=>{
                    if(error.response.status == 400){
                        this.message = error.response.data.error;
                    }
                })
            },
            mostrarUser(){
                this.table = [{}]
                this.visible = true
                if(this.table.length === 1){
                    axios.get('http://localhost:3000/')
                    .then(response=>{
                    //Passando todos os id para a tabela
                        for (let i = 0; i < response.data.Login.length; i++) {                           
                            this.table.push({
                                id: response.data.Login[i].user.id,
                                name: response.data.Login[i].user.name
                            })
                        }
                        this.$refs.id.max = this.table.length - 1
                        //apagando o elemento 0 da tabela
                        this.table.shift()
                })
                }
            },
            verificar_Id(){
                axios.get('http://localhost:3000/')
                .then(response=>{
                    if(this.$refs.id.value > response.data.Login.length){
                        this.message = "Id inválido"
                        this.cor = 'red'
                    }
                    else{
                        this.message = ""
                        this.cor = 'black'
                    }
                    this.$refs.id.max = response.data.Login.length
                })
            },
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
                this.id = this.selected.split(" ")[0]
            }
        }
    }
</script>
<template>
    <div>
        <div id="d">
            <h1>Deletar</h1>
            <div id="d_1">
            <input ref="id" placeholder="ID" type="number" min="1" 
                   @click="verificar_Id" v-on:keyup="verificar_Id"
                   :style="{outlineColor: cor}"
                   />
            </div>
            
            <h2>
                <p>{{message}}</p>
            </h2>
            <div id="d_2">
            <h3>
                <button @click="deletar">Deletar</button>
                <button @click="mostrarUser">Mostrar usuarios</button>
            </h3>
            </div>
            <select v-model="selected" size="5" v-show="visible">
                <option v-for="(item, index) in filterName" v-bind:key="item.id">
                    {{index+1}} - {{item.name}}
                </option>
        </select>
        </div>
    </div>
</template>
<style scoped>
    #d{
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    button{
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
    }
    h1{
        color: #fff;
        font-size: 30px;
    }
    button:hover{
        background: aqua;
        color: black;
    }
    input{
        background: #fff;
        color: black;
        outline-color: #a9a9a9;
        width: 8em;
        font-size: 100%;
    }
    #d_1{
        margin-bottom: -1.5em;
    }
    h2{
        color: red;
        align-items: center;
    }
    h2 p{
        font-size: 0.8em;
    }
    h3{
        margin-top: 32px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #d_2{
        margin-top: -1.5em;
    }
</style>