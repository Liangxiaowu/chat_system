<template>
  <div class="chat">
    <div class="chat_left">
      <Menu active-key="1" class="menu_left" mode="vertical" style="width:30%">
        <Menu-group title="系统管理员" style="width:100px">
          <i-input placeholder="Search_user" style="width: 110px;marign-top:20px"></i-input>
          <Menu-item key="1" style="margin-top:50px" class="left_name">李白</Menu-item>
          <Menu-item key="2" class="left_name">韩愈</Menu-item>
          <Menu-item key="3" class="left_name">柳宗元</Menu-item>
          <Menu-item key="4" class="left_name">曾巩</Menu-item>
        </Menu-group>
      </Menu>
      
      <div class="chat_bottom_container">
        <i-input type="textarea" placeholder="请按enter键" :rows="4" style="border-color:white"></i-input>
    </div>
    <div class="chat_container">

      </div>
    </div>
    
     
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.chat {
  width: 60%;
  margin: 10% 20%;
  background-clip: padding-box;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  text-align: center;
  border-radius: 20px;
}
.chat_left {
  border: 1px solid white;
  margin: 30px auto;
  width:90%;
  height: 400px;
  border-radius: 20px;
}
.menu_left {
  display: block;
  background-color: #409eff;
  height: 100%;
  width:30%;
  color: white;
  border-radius: 20px 0px 0px 20px;
}
.left_name{
    width:100px;
}
.chat_container{
    border:1px solid white;
    background-color:#eaeaea;
    float:right;
    width: 71%;
    height: 80%;
    position: relative;
     margin-top: -400px;
     border-radius: 0px 20px 0px 0px;
}
.chat_bottom_container{
    width:70%;
    height: 20%;
    background-color:white;
    float:right;
    position: relative;
    margin-top: -90px;
    
}
</style>