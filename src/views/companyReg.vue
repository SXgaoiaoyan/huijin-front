 <template>
  <div>
    <Layout class="layout">
      
      <Header class="header">
        <Row>
          <i-col span="3" offset="1">
            <img src="http://static.huijinjiu.com/LOGO.png" class="logo" />
          </i-col>
          <i-col span="3" offset="1" style="font-size: 23px;margin-top: 30px;"> 欢迎登录
          </i-col>
          <i-col span="2" offset="14" style="font-size:16px;margin-top:60px">
              已有帐号? &nbsp;<a style="color:red;">请登录</a>
          </i-col>
        </Row>
      </Header>

     
      <div class="content">
        <div>
          <Card style="margin-top:76px;width:430px;margin-left:auto;margin-right:auto" v-show="false">
            <img src="../static.huijinjiu.com/companyReg/verify.png" />
            <div v-show='phone_login_d'>
              <Form ref="phoneFormValidate" :model="phoneFormValidate" :rules="phoneRuleValidate">
                  <FormItem prop='phone_d'>
                    <Input type="text" placeholder="请输入常用手机号" class="phone" v-model="phoneFormValidate.phone_d" clearable size="large">
                        <span slot="prepend"> 中国+86 </span>
                    </Input>
                  </FormItem>

                <Row v-show="phoneFormValidate.phone_d.length==11" style="margin:0 4%;margin-bottom:18px">
                  <div class="l-captcha" data-site-key="a61ebded8b92ba71b5272a5f60fc1be7" data-callback='getCaptchaResponse'></div>
                </Row>

                <FormItem prop='code_d'>
                    <Input type="text" placeholder="请输入短信验证码" v-model="phoneFormValidate.code_d" clearable size="large">
                    <span slot="prepend">手机验证码</span>
                    <span v-show='!checked_d' slot="append" @click='send_code_m' style="cursor:pointer">请先进行人机验证</span>
                    <span v-show='checked_d&&!sended_d' slot="append" @click='send_code_m' style="cursor:pointer">发送验证码</span>
                    <span v-show='sended_d' slot="append" style="cursor:pointer">{{time_d}}s后重新获取</span>
                    </Input>
                </FormItem>

                <FormItem>
                    <Checkbox >
                        我已阅读并同意<a> <<喜马拉雅用户注册协议和隐私条款>> </a>
                    </Checkbox>
                    <Button class='login' @click="phone_login_m('phoneFormValidate')">
                        下一步
                    </Button>
                    <div style="margin-top:15px">
                        <a><img src="../static.huijinjiu.com/companyReg/user.png" style="vertical-align:middle"/> <span style="color:black">个人用户注册</span></a>
                    </div>
                </FormItem>
              </Form>
            </div>
          </Card>
          <!-- 设置密码 -->
          <Card style="margin-top:76px;width:430px;margin-left:auto;margin-right:auto" v-show="false">
            <img src="../static.huijinjiu.com/companyReg/pass.png" />
            <Form>
                <FormItem style="margin-top:20px">
                    <Input type="text" placeholder="设置数字与字母的密码">
                    <span slot="prepend">设置密码</span>
                    </Input>
                </FormItem>
                <FormItem>
                    <Input type="text" placeholder="再次输入密码">
                    <span slot="prepend">确认密码</span>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button class="login">立即注册</Button>
                </FormItem>
            </Form>
            <div style="margin-top:15px">
                <a><img src="../static.huijinjiu.com/companyReg/user.png" style="vertical-align:middle"/> <span style="color:black">个人用户注册</span></a>
            </div>
          </Card>

          <!-- 公司信息 -->
          <Card style="margin-top:76px;width:430px;margin-left:auto;margin-right:auto;">
            <img src="../static.huijinjiu.com/companyReg/company.png" />
            <Form >
                <FormItem>
                    公司名称: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px">
                    </Input>
                </FormItem>

                <FormItem>
                    <div style="float:left">
                        公司所在地: &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <al-selector v-model="resArr" level="2" style="width:300px;float:left"/>
                </FormItem>

                <FormItem>
                    公司详细地址: <Input type="text" style="width:300px">
                    </Input>
                </FormItem>

                <FormItem>
                    <div style="float:left">
                    上传营业执照:
                    </div>
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <!-- <Button>浏览</Button>  -->
                        <Button>上传</Button>
                    </Upload>
                    </Input>
                </FormItem>
                 <FormItem>
                    <div style="float:left">
                    上传商标注册证:
                    </div>
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <!-- <Button>浏览</Button>  -->
                        <Button>上传</Button>
                    </Upload>
                    </Input>
                </FormItem>

                <FormItem>
                    公司人数: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px">
                    </Input>
                </FormItem>
                <FormItem>
                    公司行业: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px">
                    </Input>
                </FormItem>  
                <FormItem>
                    公司性质: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px">
                    </Input>
                </FormItem>
                <FormItem>
                    公司营业额: &nbsp;&nbsp;&nbsp;
                     <Input type="text" style="width:300px">
                    </Input>
                </FormItem>
                <FormItem>
                        联系人姓名: &nbsp;&nbsp;&nbsp;
                    <Input type="text" style="width:300px">
                    </Input>
                </FormItem> 
                <FormItem>
                    所在部门: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px">
                    </Input>
                </FormItem> 
                <FormItem>
                    验证手机: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px">
                    </Input>
                </FormItem> 
                <FormItem>
                   <Button style="width:300px;margin-left:78px">立即验证</Button>
                </FormItem>
                 <FormItem>
                    <Checkbox >
                        我已阅读并同意<a> <<喜马拉雅用户注册协议和隐私条款>> </a>
                    </Checkbox>
                    <Button class='login' @click="phone_login_m('phoneFormValidate')">
                        立即注册
                    </Button>
                </FormItem> 
            </Form>
          </Card>
        </div>
      </div>
      
      <!--脚部-->
      <div class="footer">
        <div style="width:750px;margin-left:auto;margin-right:auto;height:14px">
          <ul>
            <li>
              <a href="">关于我们</a>
            </li>
            <li>
              <a href="">联系我们</a>
            </li>
            <li>
              <a href="">人才招聘</a>
            </li>
            <li>
              <a href="">商家入驻</a>
            </li>
            <li>
              <a href="">广告服务</a>
            </li>
            <li>
              <a href="">手机京东</a>
            </li>
            <li>
              <a href="">友情链接</a>
            </li>
            <li>
              <a href="">销售联盟</a>
            </li>
            <li>
              <a href="">京东社区</a>
            </li>
            <li>
              <a href="">京东公益</a>
            </li>
            <li>
              <a href="">English Site</a>
            </li>
          </ul>
        </div>
        <div style="width:240px;margin-left:auto;margin-right:auto;padding-top:16px">
          Copyright&copy;2004-2018 京东JD.com版权所有
        </div>
      </div>

    </Layout>

  </div>

</template>

<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      time_d: 60,
      phone_login_d: true,
      checked_d: false,
      sended_d: false,
      resArr:[],
      formValidate: {
        account_d: "",
        password_d: ""
      },
      ruleValidate: {
        account_d: [
          { required: true, message: " 账号不能为空", trigger: "blur" },
          {
            type: "string",
            min: 8,
            message: "账号长度不少于8个字符",
            trigger: "blur"
          }
        ],
        password_d: [
          { required: true, message: " 密码不能为空", trigger: "blur" },
          {
            type: "string",
            min: 8,
            message: "密码长度不少于8个字符",
            trigger: "blur"
          }
        ]
      },
      phoneFormValidate: {
        phone_d: "",
        code_d: ""
      },
      phoneRuleValidate: {
        phone_d: [
          { required: true, message: "手机号码不能为空", trigger: "blur" },
          {
            type: "string",
            len: 11,
            message: "请输入11位手机号",
            trigger: "blur"
          }
        ],
        code_d: [
          { required: true, message: " 验证码不能为空", trigger: "blur" },
          {
            type: "string",
            len: 4,
            message: "请输入四位验证码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    var SCRIPT_URL = `//captcha.luosimao.com/static/dist/api.js`;
    var scriptHeat = document.createElement("script");
    scriptHeat.type = "text/javascript";
    scriptHeat.src = SCRIPT_URL;
    scriptHeat.onload = onload;
    document.body.appendChild(scriptHeat);
    window.getCaptchaResponse = this.getCaptchaResponse;
  },
  methods: {
    phone_login_m(name) {
      var self = this;

      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("登陆成功");
          self.ajax
            .post("/api/login", {
              phone: self.phoneFormValidate.phone_d,
              code: self.phoneFormValidate.code_d
            })
            .then(response => {
              self.$store.commit("login", response.data);
              if (self.$route.query.redirect) {
                self.$router.push({ path: self.$route.query.redirect });
              } else {
                self.$router.push({
                  name: "home"
                });
              }
            })
            .catch(error => {
              if (error.status_code == 403) {
                self.$Message.error(error.message);
                LUOCAPTCHA.reset();
              }
            });
        } else {
          this.$Message.error("登录失败");
        }
      });
    },
    phone_reset_m(name) {
      this.$refs[name].resetFields();
    },
    //人机验证成功返回
    getCaptchaResponse(resp) {
      var self = this;
      this.ajax
        .post("/api/checkcaptcha", {
          captcha: resp
        })
        .then(function(response) {
          self.checked_d = true;
        })
        .catch(function(error) {
          if (error.status_code == 400) {
            alert(error.message);
            LUOCAPTCHA.reset();
          }
        });
    },
    send_code_m() {
      var self = this;

      this.ajax
        .post("/api/sendcode", {
          phone: self.phoneFormValidate.phone_d
        })
        .then(function(response) {
          self.Interval();
          self.sended_d = true;
        })
        .catch(function(error) {
          if (error.status_code == 400) {
            alert(error.message);
          }
        });
    },
    Interval() {
      var self = this;
      var fun = function() {
        self.time_d--;
        if (self.time_d == 0) {
          clearInterval(interval);
          self.time_d = 60;
          self.checked_d = false;
          self.sended_d = false;
          LUOCAPTCHA.reset();
        }
      };
      var interval = setInterval(fun, 1000);
    },
    //     Cookies.set('user', this.form.userName);
    //     Cookies.set('password', this.form.password);
    //  this.$store.commit('login',response.data.token)
    //     this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
    //     if (this.form.userName === 'iview_admin') {
    //         Cookies.set('access', 0);
    //     } else {
    //         Cookies.set('access', 1);
    //     }
    //     this.$router.push({
    //         name: 'home_index'
    //     });
    // })
    account_login_m(account_d) {
      this.$refs[account_d].validate(valid => {
        if (valid) {
          this.$Message.success("登陆成功");
        } else {
          this.$Message.error("登录失败");
        }
      });
    }
  }
};
</script>
<style scoped>
.select {
  color: red;
}
.layout {
  width: 100%;
  /* height: 968px; */
  background: url(http://static.huijinjiu.com/bj.jpg) no-repeat;
  background-size: 100% 2164px;
}
/*头部*/
.header {
  width: 100%;
  height: 120px;
  background-color: transparent;
}
.header .logo {
  margin-top: 32px;
}
/*内容*/
.content {
  width: 100%;
  /* height: 648px; */
  background: url(http://static.huijinjiu.com/9919146688478019.png) no-repeat;
  background-size: 100% 100%;
}
.content ul li {
  list-style: none;
  cursor: pointer;
}

/* 手机登录 */
.content .phone_login {
  text-align: center;
  font-size: 18px;
  margin-top: 12px;
}
/* 账户登录 */
.content .account_login {
  font-size: 18px;
  margin-top: 12px;
  text-align: center;
}

.content .phone {
  /* width: 100%; */
  margin-top: 20px;
  font-size: 14px;
}
.content .delete {
  width: 100%;
  height: 40px;
  background: url(../static.huijinjiu.com/login/delete.png) no-repeat center;
  outline: none;
  border: 1px solid #a6a6a6;
  border-left: none;
}
.content .pwd {
  width: 100%;
  height: 40px;
  border: 1px solid #a6a6a6;
  background: url(../static.huijinjiu.com/login/pwd.png) no-repeat center;
  background-color: #f3f3f3;
  outline: none;
}
.content .forget {
  width: 100%;
  font-size: 12px;
  margin-top: 23px;
  border: none;
  outline: none;
  background-color: transparent;
}

.content .clickVerify {
  width: 100%;
  height: 40px;
  border-radius: 0;
  border: 1px solid #a6a6a6;
  outline: 0;
  font-size: 14px;
  background-color: white;
  margin-top: 40px;
}
.content .login {
  width: 100%;
  height: 40px;
  border: 1px solid #ff3430;
  outline: none;
  background-color: #fe706e;
  font-size: 19px;
  color: white;
  margin-top: 15px;
  letter-spacing: 10px;
}
.content .login1 {
  width: 100%;
  height: 40px;
  border: 1px solid #ff3430;
  background-color: #fe706e;
  font-size: 19px;
  color: white;
  letter-spacing: 10px;
}
.content .reg {
  width: 100%;
  font-size: 12px;
  border: none;
  outline: none;
  background-color: transparent;
  color: red;
}

/*脚部*/
.footer {
  width: 100%;
  height: 40px;
  margin-top: 22px;
}

.footer ul li {
  width: 68px;
  list-style: none;
  float: left;
  border-right: 2px solid #8f618f;
  font-size: 12px;
  text-align: center;
}
.footer ul li:last-child {
  border-right: none;
}
.footer ul li a {
  color: #626262;
}


</style>


