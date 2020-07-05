<template>
  <div class="chat">
    <Row>
      <i-col span="6">

        <ul data-v-38b1ebf9="" class="ivu-menu ivu-menu-dark ivu-menu-vertical" active-key="1" style="height: 400px;width: 100%;border-radius: 10px 0 0 10px">
          <li data-v-38b1ebf9="" class="ivu-menu-item-group">
            <div class="ivu-menu-item-group-title">聊天系统</div>
            <ul>
              <li data-v-38b1ebf9="" class="ivu-menu-item" @click="startChat(1)"> 张三 </li>
              <li data-v-38b1ebf9="" class="ivu-menu-item"> 李四 </li>
              <li data-v-38b1ebf9="" class="ivu-menu-item"> 王五 </li>
            </ul>
          </li>
        </ul>
      </i-col>
      <i-col span="18">
          <router-view  @wsSend="wsSend" />
      </i-col>
    </Row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        path:"ws://127.0.0.1:9502",
        socket:null
      }
    },
    computed: {
    },
    created() {
      this.init();
    },
    methods: {
      startChat(id){
        console.log(id)
      },
      init: function () {
        if(typeof(WebSocket) === "undefined"){
          alert("您的浏览器不支持socket")
        }else{
          // 实例化socket
          this.socket = new WebSocket(this.path)
          // 监听socket连接
          this.socket.onopen = this.open
          // 监听socket错误信息
          this.socket.onerror = this.error
          // 监听socket消息
          this.socket.onmessage = this.getMessage
        }
      },
      open: function () {
        console.log("socket连接成功")
      },
      error: function () {
        console.log("连接错误")
      },
      getMessage: function (msg) {
        console.log(msg.data)
      },
      wsSend: function (data) {
        console.log("发送数据给服务端")
        this.socket.send(data)
      },
      close: function () {
        console.log("socket已经关闭")
      }
    },
    destroyed() {
      this.socket.onclose = this.close//离开路由之后断开websocket连接
    }
  }
</script>
<style scoped>
  .chat{
    width: 80%;
    margin-left: 10%;
    margin-top: 10%;
    /*background: #f3f3f3;*/
    border: 1px solid #ccc;

    border-radius: 10px;
  }
</style>