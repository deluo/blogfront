<template>
    <div>
        <el-form :model="loginForm" :rules="checkRule" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
            <h3 class="title">博客系统登录</h3>
            <el-form-item prop="name">
                <el-input type="text" v-model="loginForm.name" auto-complete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click.native.prevent="checkLogin('loginForm')" :loading="logining">登录</el-button>
            <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
            </el-form-item>
        </el-form>
    </div>

</template>

<style scoped>
/* .el-row {  
        margin-bottom: 20px;  
        &:last-child {  
         margin-bottom: 0;  
        }  
    }  
    .login-box {  
        margin-top:20%;  
        margin-left:40%;  
    }  */

.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 10% auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.remember {
  margin: 0px 0px 25px 0px;
}
</style>
 
<script>
import config from "../../config/config";
export default {
  name: "login",
  data() {
    return {
      logining: false,
      checked: true,
      loginForm: {
        name: "",
        password: ""
      },
      checkRule: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  created() {},
  methods: {
    checkLogin(validatName) {
      const _this = this;
      this.$refs[validatName].validate(valid => {
        if (valid) {
          this.$http
            .post(config.url + "/users/login", {
              name: _this.loginForm.name,
              password: _this.loginForm.password
            })
            .then(res => {
              if (res.data.status === 0) {
                this.$message({ message: res.data.err, type: "error" });
              } else {
                sessionStorage.setItem();
                //console.log(res.data.message);
              }
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>



 