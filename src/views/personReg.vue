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
            已有帐号? &nbsp;
            <a style="color:red;">请登录</a>
          </i-col>
        </Row>
      </Header>

      <div class="content">
        <div>
          <Card style="margin-top:76px;width:500px;margin-left:auto;margin-right:auto">
            <Steps :current="current" style="margin-left:30px">
              <Step title="第一步" content="验证手机号"></Step>
              <Step title="第二步" content="填写帐号信息"></Step>
              <Step title="成功" content="注册成功"></Step>
            </Steps>
            <!-- 验证手机号 -->
            <div style="width:420px;margin-left:auto;margin-right:auto" v-show="current==0">
              <Form ref="phoneFormValidate" :model="phoneFormValidate" :rules="phoneRuleValidate">
                <FormItem prop='phone_d'>
                  <Input type="text" v-model="phoneFormValidate.phone_d" placeholder="请输入常用手机号" style="margin-top:20px" clearable size="large">
                  <span slot="prepend"> 中国+86 </span>
                  </Input>
                </FormItem>
                <FormItem v-show="phoneFormValidate.phone_d.length==11" style="margin:0;margin-bottom:18px">
                  <div class="l-captcha" data-site-key="a61ebded8b92ba71b5272a5f60fc1be7" data-callback='getCaptchaResponse'></div>
                </FormItem>
                <FormItem prop='code_d'>
                  <Input type="text" placeholder="请输入短信验证码" clearable size="large" v-model="phoneFormValidate.code_d">
                  <span slot="prepend">手机验证码</span> -->
                  <!-- <span  slot="append"  style="cursor:pointer">请先进行人机验证</span> -->

                  <span v-show='!checked_d' slot="append" @click='send_code_m' style="cursor:pointer">请先进行人机验证</span>
                  <span v-show='checked_d&&!sended_d' slot="append" @click='send_code_m' style="cursor:pointer">发送验证码</span>
                  <span v-show='sended_d' slot="append" style="cursor:pointer">{{time_d}}s后重新获取</span>
                  <!-- <span  slot="append" style="cursor:pointer">s后重新获取</span> -->
                  </Input>
                </FormItem>

                <FormItem prop='confirmation'>
                  <Checkbox v-model="phoneFormValidate.confirmation">
                    我已阅读并同意
                    <a>
                      <<喜马拉雅用户注册协议和隐私条款>> </a>
                  </Checkbox>
                </FormItem>
                <Button type="primary" class='login' @click="phone_login_m('phoneFormValidate')">
                  下一步
                </Button>
                <div style="margin-top:15px">
                  <router-link to="/companyReg"><img src="../static.huijinjiu.com/companyReg/user.png" style="vertical-align:middle" />
                    <span style="color:black">企业用户注册</span>
                  </router-link>
                </div>
                </FormItem>
              </Form>
            </div>
            <!-- 填写账号信息 -->
            <div style="width:420px;margin-left:auto;margin-right:auto" v-show="current==1">
              <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
                <FormItem prop="passwd">
                  <Input type="password" v-model="formCustom.passwd">
                  <span slot="prepend">设置密码</span>
                  </Input>
                </FormItem>
                <FormItem prop="passwdCheck">
                  <Input type="password" v-model="formCustom.passwdCheck">
                  <span slot="prepend">确认密码</span>
                  </Input>
                </FormItem>
                <FormItem>
                  <Button class="login" @click="bindPassword('formCustom')">下一步</Button>
                </FormItem>
              </Form>
              <div style="margin-top:15px">
                <a><img src="../static.huijinjiu.com/companyReg/user.png" style="vertical-align:middle" />
                  <span style="color:black">个人用户注册</span>
                </a>
              </div>
            </div>
            <!-- 注册成功 -->
            <div style="width:430px;margin-left:auto;margin-right:auto" v-show="current==2">
              <img src="../static.huijinjiu.com/personReg/sign.png" style="margin-left:138px;margin-top:40px" />
              <Br />
              <Br />
              <div style="font-size:16px;text-align:center">
                恭喜你成功注册!如不自动跳转请
                <a style="color:red">点击这里</a>
              </div>
            </div>
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
        <div style="width:240px;margin-left:auto;margin-right:auto;margin-top:15px">
          Copyright&copy;2004-2018 京东JD.com版权所有
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("这两次输入的密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      current: 0,
      //验证码发送等所需数据
      time_d: 60,
      phone_login_d: true,
      checked_d: false,
      sended_d: false,

      phoneFormValidate: {
        phone_d: "",
        code_d: "",
        confirmation: ""
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
        ],
        confirmation: [
          {
            type: "boolean",
            value: true,
            message: "请点击同意条款",
            trigger: "change"
          }
        ]
      },
      //2.绑定密码页面验证数据及规则
      formCustom: {
        passwd: "",
        passwdCheck: ""
      },
      ruleCustom: {
        passwd: [{ validator: validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: validatePassCheck, trigger: "blur" }]
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
              self.current += 1;
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
     bindPassword(name) {
      // this.current += 1;
      var self=this
      this.$refs[name].validate(valid => {
        if (valid) {
          self.ajax
            .post("/api/updateCompanyPassword", {
              password: self.formCustom.passwd,
            })
            .then(response => {
              self.current += 1;
              self.$Message.success("登陆成功");
            })
            .catch(error => {
              if (error.status_code == 422) {
                self.$Message.error(error.message);
              }
            });
        } else {
          this.$Message.error("Fail!");
        }
      });
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
  height: 680px;
  background-color: white;
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
  height: 150px;
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
