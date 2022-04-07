<script>
    import axios from 'axios'
    export default{
        name : 'App',
        data(){
            return{
                message : 'Bem vindo!'
            }
        },
        methods:{
            nome_(){
                //Pega o valor do input
                let id = this.$refs.id.value - 1;
                axios.get('http://localhost:3000')
                //Pegando os dados do servidor
                .then(response => {
                //Pegando o id do usuario
                this.message = response.data.Login[id].user.name
                })
                //Caso ocorra algum erro
                .catch(error => {
                error = 'Usuario não encontrado '
                this.message = error
                })
            },
            inicio_(){
                this.message = "Bem vindo!"
            }
        }
    }
</script>
<template>
    <div id="d">
        <h1>
            {{ message }}
        </h1>
        <input placeholder="Digite o Id" 
               ref="id"
        />
        <h2>
            <button @click="nome_">
                Pegar Nome
            </button>
            <button @click="inicio_">
                Inicio
            </button>
        </h2>
    </div>
</template>
<style scoped>
    #d{
        background-color: #333;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1{
        color: #fff;
        font-size: 30px;
    }
    h2{
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
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
    button:hover{
        background: aqua;
        color: black;
    }
    input{
        margin: 8px;
        background: #fff;
        color: black;
        outline-color: #a9a9a9;
    }
</style>