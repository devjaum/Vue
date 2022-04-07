<template>
  <div id='test'>
      <Teste />
  </div>
</template>

<script>
  import Teste from './views/bot.vue'
  export default {
    name: 'App',
    data() {
      return {
        message: '',
      }
    },
    methods:{
      
    },
    components: {
      Teste
    }
  }
</script>

<style>
  body{
    background-color: darkslategrey;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
#chat{
  border: 1px solid #2c3e50;
  border-radius: 5px;
  padding-top: 20px;
  margin-top: 350px;
  margin-left: 350px;
  margin-right: 350px;
  margin-bottom: 20px;
}
#chat_bot{
  text-align: left;  /*
    Margin-right dinamicamente
  */
  flex-direction: row;
}
#chat_user{
  text-align: right;
}
text{
  color: white;
  padding: 10px;
  border-radius: 5px;
}
v-btn{
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  padding: 10px;
}
input{
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  padding: 10px;
}
#p_bot{
  margin-top: 5px;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 10px;
  word-wrap: break-word;
  width: 35%;
  background-color: #2c3e50;
  border : 1px solid black;
}
#p_user{
  flex-direction: row-reverse;
  margin-left: 57.5%;
  text-align: right;
  margin-right: 20px;
  padding: 10px;
  word-wrap: break-word;
  width: 35%;
  background-color: green;
  border : 1px solid black;
}
#test{
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
}
</style>
