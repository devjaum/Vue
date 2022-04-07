<template>
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/cadastro">Cadastro</router-link>
        <router-link to="/alterar">Alterar</router-link>
        <router-link to="/deletar">Deletar</router-link>
         
    </div>
</template>
<script>
    export default {
        name: 'NavBar',
    }
</script>

<style scoped>
    #nav{
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        align-items: center;
    }
    #nav a{
        color: #fff;
        text-decoration: none;
        font-size: 100%;
        margin-left: 20px;
    }
</style>