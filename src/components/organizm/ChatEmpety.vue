<template>
  <div class="container-fluid">
    <div class="form">
      <div class="chat-left">
        <div class="nav">Chat</div>
        <div class="title">Belum ada chat</div>
      </div>
      <div class="chat-right">
        <div class="nav-chat"></div>
        <div class="chat-input">
          <input type="text" placeholder="type message..." />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chatempety'
}
</script>

<style scoped>
.container-fluid {
  /* border: 1px solid black; */

  width: 86%;
  height: 100vh;
}

.form {
  /* border: 1px solid #8e8e93; */
  display: flex;
  height: 583px;
}

/* Chat left */

.form .chat-left {
  border: 1px solid #8e8e93;
  flex: 1.1;
  border-radius: 5px;
}

.form .chat-left .nav {
  border-bottom: 1px solid #8e8e93;
  height: 70px;

  padding-top: 14px;
  padding-left: 20px;
  font-size: 20px;
  text-align: left;
  font-weight: bolder;
}

.form .chat-left .title {
  font-size: 20px;
  font-weight: bolder;
  position: relative;
  top: 200px;
}

/* Chat right */
.form .chat-right {
  border: 1px solid #8e8e93;
  flex: 2;
  margin-left: 25px;
  border-radius: 5px;
}

.chat-right .nav-chat {
  border-bottom: 1px solid #8e8e93;
  height: 70px;

  text-align: left;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.chat-right .nav-chat .profil {
  /* border: 1px solid #8e8e93; */
  display: inline-block;
  position: relative;
  left: 20px;
  top: 14px;
}

.chat-right .nav-chat .profil img {
  border-radius: 50%;

  width: 40px;
  height: 40px;
}

.chat-right .nav-chat .profil .name-chat {
  font-weight: 600;
  font-size: 16px;
  margin-left: 10px;
}

.chat-right .chat-input {
  /* border: 1px solid black; */
  position: relative;
  top: 450px;
}

.chat-right .chat-input input {
  background: #ffffff;
  border: 1px solid #8e8e93;
  border-radius: 23px;
  padding-left: 20px;

  width: 90%;
  height: 40px;
}
</style>
