<template>
    <div class="content">
        <p class="title">与张三聊天窗口</p>
        <div class="record">
            <p class="record-list ">张三：<span class="qp">Hello!</span></p>
            <p class="record-right"><span class="qp">Hi!</span>：李四</p>
        </div>
        <i-input size="large"   v-model="con" placeholder="请输入..."  @keyup.enter.native="toSubmit()" ></i-input>
    </div>
</template>

<script>
    export default {
        name: "Content",
        data () {
            return {
                con: "",
                formTop: {
                    con: '',
                }
            }
        },
        methods:{
            toSubmit(){
                let keyword = this.con.replace(/^\s+|\s+$/g,"");
                if(keyword){

                    let data = {
                        foUser: 2,
                        toUser: this.$route.params.user,
                        msg: keyword
                    }
                    console.log(JSON.stringify(data))
                    this.$emit('wsSend',JSON.stringify(data));
                }
            }
        }
    }
</script>

<style>

    .title{
        text-align: center;
        padding: 10px;
        border-bottom: 1px solid #f3f3f3;
    }
    .record{
        padding: 20px 10px;
        height: 308px;

    }
    .record-list{
        float: left;
    }
    .record-right{
        float: right;
    }
    .qp{
        display: inline;
        height: auto;
        padding: 5px;
        background: #89dfe3;
        border-radius: 5px;
        overflow: fragments;

    }
    .ivu-input-large{
        height: 50px !important;
    }
</style>