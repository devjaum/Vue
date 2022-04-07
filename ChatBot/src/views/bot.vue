<script>
    export default {
        name: "app",
        data(){
            return{
            bot_message:'',
            user_message:'',
            }
        },
        methods:{
          chat(){
            if(this.user_message.toLowerCase() == "1"){
              this.bot_message = "Oissssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
              this.html();
            }
            else if(this.user_message.toLowerCase() == ""){
              return
            }
            else if(this.user_message.toLowerCase() == "2"){
              this.bot_message = "Salve salve"
              this.html();
            }

          },
          html(){
              let tag_p = document.createElement('p');
              let tag = document.createElement('text');
              tag.setAttribute('id','chat_user');
              tag_p.setAttribute('id','p_user');
              tag.innerHTML = this.user_message;
              tag_p.appendChild(tag);
              document.getElementById('chatbot').appendChild(tag_p);
              //bot
              let newTag = document.createElement('text');
              let tag_p2 = document.createElement('p');
              newTag.setAttribute('id', 'chat_bot');
              tag_p2.setAttribute('id', 'p_bot');
              //scroll down
              
              newTag.innerHTML = this.bot_message;
              tag_p2.appendChild(newTag)
              document.getElementById('chatbot').appendChild(tag_p2);
              let chat = document.getElementById('chatbot');
              chat.scrollTop = chat.scrollHeight;
          }
        }
    }
</script>
<template>
    <div>
    <div id="chat">
      <div id="chat_1"><h1>Bot</h1></div>
        
        <div id="chatbot"></div>
    </div>
    <div id="center">
      <input placeholder="Digite aqui" v-model="user_message" ref="chat" v-on:keyup.enter="chat"/>
      <v-btn @click="chat" v-on:keyup.enter="chat">Enviar</v-btn>
    </div>
  </div>
</template>
<style>
v-btn{
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  padding: 10px;
  background: white;
}
v-btn:hover{
  background-color: black;
  color: white;
}
v-btn:active{
  background-color: white;
  color: black
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
#chatbot{
  height: 300px;
  overflow-y: auto;
  scroll-behavior: smooth;
  flex-direction: row;
  background-color: cadetblue;
}
::-webkit-scrollbar{
  width: 15px;
}
::-webkit-scrollbar-track{
  background: gray;
  border-radius: 30px;
}
::-webkit-scrollbar-thumb{
  background: black;
  border-radius: 30px
}
::-webkit-scrollbar-thumb:hover{
  background: #464444;
}

#center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
#chat{
  background-color: cadetblue;
  position: static;
  width: 500px;
  text-align: center;
}
#chat_1{
  border-bottom: #2c3e50 1px solid;
  margin-bottom: 20px;
  background: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-top: -50px;
}
</style>
