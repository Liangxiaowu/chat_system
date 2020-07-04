<template>
  <div class="login">
    <i-form ref:form-inline :model="formInline" :rules="ruleInline" inline>
      <span>用户名：</span>
      <Form-item >
        <i-input type="text" :value.sync="formInline.user" placeholder="Username"></i-input>
      </Form-item>
      <br />
      <span>密码：</span>
      <Form-item >
        <i-input type="password" :value.sync="formInline.password" placeholder="Password"></i-input>
      </Form-item>
      <br />
      <Form-item>
        <i-button type="primary" @click="handleSubmit()">登录</i-button>
      </Form-item>
    </i-form>
  </div>
</template>
<script>
export default {
  
  data() {
    return {
      formInline: {
        user: "admin",
        password: "123"
      },
      ruleInline: {
        user: [{ required: true, message: "请填写用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请填写密码", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      if(this.formInline.user == 'admin' && this.formInline.password == '123'){
          alert('登录成功');
           this.$router.replace("/chat")
      }else{
          alert('登录失败');
      }
    }
  }
}
</script>

<style scoped>
 .login{
    background-clip: padding-box;
	margin: 180px auto;
	width: 350px;
	padding: 15px 35px 15px 35px;
	background: #fff;
	border: 1px solid #eaeaea;
	box-shadow: 0 0 25px #cac6c6;
	text-align: center;
	border-radius: 20px;
 }
</style> 