<template>
  <div class="login_container">
    <div class="login_box">
      <!--登录表单区域-->
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="0px" class="login_form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" @click="addDialogVisible = true">注册</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!--添加用户-->
    <el-dialog title="注册用户" :visible.sync="addDialogVisible" width="70%"
               @close="addDialogClosed">
      <!--内容主体区域--->
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="0px">
        <el-form-item  prop="username">
          <el-input v-model="addForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item  prop="password">
          <el-input v-model="addForm.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item  prop="email">
          <el-input v-model="addForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item  prop="mobile">
          <el-input v-model="addForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
      </el-form>
      <!--底部按钮区域--->
      <span slot="footer">
          <el-button @click="addDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addUser">确定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
        name: "Login",
      data(){
        //验证手机号的规则
        var checkMobile = (rule, value, cb) => {
          // 验证手机号的正则表达式
          const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
          if (regMobile.test(value)) {
            return cb()
          }
          cb(new Error('请输入合法的手机号'))
        }

          return{
          //登录表单数据绑定对象
          loginForm:{
            username:'',
            password:''
          },
          //表单验证规则
          loginFormRules:{
            //验证用户名是否合法
            username: [
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
            ],
            //验证密码是否合法
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
            ]
          },
          //控制添加用户框的显示与隐藏
          addDialogVisible:false,
          addForm:{
              username:'',
              password:'',
              email:'',
              mobile:''
            },
          //添加表单验证规则对象
          addFormRules:{
              username:[
                { required:true, message:'请输入用户名', trigger:'blur'},
                { min:3, max:15, message:'用户名长度在3到10个字符之间', trigger:['blur','change']}
              ],
              password:[
                { required:true, message:'请输入密码', trigger:'blur'},
                { min:6, max:15, message:'密码长度在6到15个字符之间', trigger:['blur','change']}
              ],
              email:[
                { required:true, message:'请输入邮箱', trigger:'blur'},
                { type:'email', message:'请输入正确的邮箱地址', trigger:['blur','change']}
              ],
              mobile:[
                { required:true, message:'请输入手机号', trigger:'blur'},
                { validator:checkMobile, trigger:['blur','change']}
              ]
            },

        }
      },
      methods:{
        //重置登录表单
        // resetLoginForm(){
        //   this.$refs.loginFormRef.resetFields();
        // },
        //表单预验证
        login(){
          this.$refs.loginFormRef.validate(async valid=>{
            if(!valid) return;
            const {data:res} = await this.$http.post("login",this.loginForm);
            if(res.meta.status !== 200) return this.$message.error("登录失败!");
            //this.$message.success("登录成功!");
            //将登录成功后的token保存到客户端的sessionStorage中
            //项目其他api必须在登录之后才能访问
            //token只应当在会话期间生效，所以将token保存在session Storage中
            window.sessionStorage.setItem("token",res.data.token);
            //通过编程式导航跳转到后台主页，路由地址是/home
            this.$router.push("/home");
          })
        },
        //监听添加用户对话框的关闭事件
        addDialogClosed(){
          this.$refs.addFormRef.resetFields()
        },
        //添加新用户
        addUser(){
          //预验证
          this.$refs.addFormRef.validate(async valid =>{
            if(!valid) return
            //可以发起添加用户的网络请求
            const {data:res} = await this.$http.post('users',this.addForm)
            if(res.meta.status !== 201) return this.$message.error('添加用户失败!')
            //this.$message.success('添加用户成功!')
            this.addDialogVisible = false
          })
        }
      }
    }
</script>

<style scoped>
  .login_container{
    background-color: #2b4b6b;
    height: 100%;
  }
  .login_box{
    width: 260px;
    height: 200px;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

  }

  .login_form{
    position: absolute;
    bottom: 0;
    top:20px;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .btns{
    height: 50px;
    display: flex;
    justify-content: flex-end;
  }

</style>
