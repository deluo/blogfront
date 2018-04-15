<template>
    <div class="login-box" id="login" >  
        <el-row>  
            <el-col :span="8">  
                <el-input id="name"  v-model="name" placeholder="请输入帐号">  
                    <template slot="prepend">帐号</template>  
                </el-input>   
            </el-col>  
        </el-row>  
        <el-row>  
            <el-col :span="8">  
                <el-input id="password" v-model="password" type="password" placeholder="请输入密码">  
                    <template slot="prepend">密码</template>  
                </el-input>  
            </el-col>  
        </el-row>  
        <el-row>  
            <el-col :span="8">  
                <el-button id="login" @click="checkLogin" style="width:100%" type="primary">登录</el-button>  
            </el-col>  
        </el-row>  
    </div> 
</template>

<style scoped>
    .el-row {  
        margin-bottom: 20px;  
        /* &:last-child {  
         margin-bottom: 0;  
        }   */
    }  
    .login-box {  
        margin-top:20%;  
        margin-left:40%;  
    } 
</style>
 
<script>
import config from '../../config/config'
export default {
    name:'login',
    data() {
      return {
        name: '',
        password:''
      };
    },
    created(){
    },
    methods: {
      checkLogin(){
          console.log(this.name+this.password+"::"+config.url);
          this.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';  //设置post请求头
          this.$http.post(config.url+'/users/login',{name:this.name,password:this.password}).then((res)=>{console.log(res.data)});
      }
    }
}
</script>



 