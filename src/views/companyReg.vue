
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
          <!--  -->
          <Card style="margin-top:76px;width:600px;margin-left:auto;margin-right:auto">
            <Steps :current="current" style="margin-left:30px">
              <Step title="第一步" content="验证手机号"></Step>
              <Step title="第二步" content="填写帐号信息"></Step>
              <Step title="第三步" content="填写公司信息"></Step>
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
                <Button type="primary" class='login' @click="phone_reg('phoneFormValidate')">
                  下一步
                </Button>

                <div style="margin-top:15px">
                  <router-link to="/personReg"><img src="../static.huijinjiu.com/companyReg/user.png" style="vertical-align:middle" />
                    <span style="color:black">个人用户注册</span>
                  </router-link>
                </div>

              </Form>
            </div>
            <!-- 填写密码 -->
            <div style="width:420px;margin-left:auto;margin-right:auto" v-show="current==1">
              <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
                <FormItem prop="passwd">
                  <Input type="password" v-model="formCustom.passwd"></Input>
                </FormItem>
                <FormItem prop="passwdCheck">
                  <Input type="password" v-model="formCustom.passwdCheck"></Input>
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
            <!-- 公司信息 -->
            <div style="width:430px;margin-left:auto;margin-right:auto;" v-show="current==2">
              <Form ref="formCompany" :model="formCompany" :rules="ruleformCompany">
                <FormItem prop="name">
                  公司名称: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Input type="text" style="width:300px" v-model="formCompany.name">
                  </Input>
                </FormItem>

                <FormItem prop="sit">
                  <Row>
                    <i-col span="5">
                      <div>
                        公司所在地: &nbsp;&nbsp;&nbsp;&nbsp;
                      </div>
                    </i-col>
                    <i-col span="19">
                      <al-selector v-model="formCompany.sit" level="2" style="width:300px;" />
                    </i-col>
                  </Row>
                </FormItem>

                <FormItem prop="address">
                  公司详细地址:
                  <Input type="text" style="width:300px" v-model="formCompany.address">
                  </Input>
                </FormItem>

                <FormItem prop="bussiness_license">
                  <div style="float:left">
                    上传营业执照:
                  </div>
                  <div class="demo-upload-list" v-for="item in formCompany.bussiness_license">
                    <template v-if="item.status === 'finished'">
                      <img :src="item.url">
                      <div class="demo-upload-list-cover">
                        <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                        <Icon type="ios-trash-outline" @click.native="handleRemove1(item)"></Icon>
                      </div>
                    </template>
                    <template v-else>
                      <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                    </template>
                  </div>
                  <Upload ref="upload1" v-show="formCompany.bussiness_license.length==0" :show-upload-list="false" :default-file-list="defaultList" :on-success="handleSuccess1" :format="['jpg','jpeg','png']" :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" type="drag" :action="apiurl+'/api/upload'" :headers="headers" name="image" style="display: inline-block;width:58px;">
                    <div style="width: 58px;height:58px;line-height: 58px;">
                      <Icon type="camera" size="20"></Icon>
                    </div>
                  </Upload>

                </FormItem>
                <FormItem prop="trademark">
                  <div style="float:left">
                    上传商标注册证:
                  </div>
                  <div class="demo-upload-list" v-for="item in formCompany.trademark">
                    <template v-if="item.status === 'finished'">
                      <img :src="item.url">
                      <div class="demo-upload-list-cover">
                        <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                        <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                      </div>
                    </template>
                    <template v-else>
                      <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                    </template>
                  </div>
                  <Upload ref="upload" v-show="formCompany.trademark.length==0" :show-upload-list="false" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" type="drag" :action="apiurl+'/api/upload'" :headers="headers" name="image" style="display: inline-block;width:58px;">
                    <div style="width: 58px;height:58px;line-height: 58px;">
                      <Icon type="camera" size="20"></Icon>
                    </div>
                  </Upload>
                  <Modal title="View Image" v-model="visible">
                    <img :src="imgName" v-if="visible" style="width: 100%">
                  </Modal>

                </FormItem>

                <FormItem prop="people_number">
                  公司人数: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Input type="text" style="width:300px" v-model="formCompany.people_number">
                  </Input>
                </FormItem>
                <FormItem prop="company_industry">
                  公司行业: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Input type="text" style="width:300px" v-model="formCompany.company_industry">
                  </Input>
                </FormItem>
                <FormItem prop="company_nature">
                  公司性质: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Input type="text" style="width:300px" v-model="formCompany.company_nature">
                  </Input>
                </FormItem>
                <FormItem prop="business_volume">
                  公司营业额: &nbsp;&nbsp;&nbsp;
                  <Input type="text" style="width:300px" v-model="formCompany.business_volume">
                  </Input>
                </FormItem>
                <FormItem prop="contact_name">
                  联系人姓名: &nbsp;&nbsp;&nbsp;
                  <Input type="text" style="width:300px" v-model="formCompany.contact_name">
                  </Input>
                </FormItem>
                <FormItem prop="section">
                  所在部门: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Input type="text" style="width:300px" v-model="formCompany.section">
                  </Input>
                </FormItem>
                <FormItem>
                  <Button class='login' @click="bindCompany('formCompany')">
                    立即注册
                  </Button>
                </FormItem>
              </Form>
            </div>

            <!-- 注册成功 -->
            <div style="width:430px;margin-left:auto;margin-right:auto" v-show="current==3">
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
import Cookies from "js-cookie";
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please enter your password"));
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
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };
    const validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      if (value.length != 11) {
        return callback(new Error("请输入正确手机号"));
      }
      this.ajax
        .post("/api/checkRepetitionPhone", {
          phone: value
        })
        .then(function(response) {
          if (response.data.repetition == 1) {
            callback(new Error("此手机号已经注册过，请更换手机号"));
          } else {
            callback();
          }
        })
        .catch(function(error) {});
    };
    return {
      //api数据
      apiurl: APIURL,
      //验证码发送等所需数据
      time_d: 60,
      phone_login_d: true,
      checked_d: false,
      sended_d: false,

      //步骤组件所需数据
      current: 0,
      resArr: [],

      //1.手机绑定页面验证数据及规则
      phoneFormValidate: {
        phone_d: "",
        code_d: "",
        confirmation: ""
      },
      phoneRuleValidate: {
        phone_d: [{ validator: validateAge, trigger: "blur" }],
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
      },
      //3.绑定公司数据页面验证数据及规则
      formCompany: {
        name: "",
        sit: [],
        address: "",
        bussiness_license: [],
        trademark: [],
        people_number: "",
        company_industry: "",
        company_nature: "",
        business_volume: "",
        contact_name: "",
        section: ""
      },
      ruleformCompany: {
        name: [
          { required: true, message: " 公司名称不能为空", trigger: "blur" }
        ],
        sit: [
          {
            required: true,
            type: "array",
            min: 2,
            message: "请选择公司所在地区",
            trigger: "change"
          }
        ],
        address: [
          { required: true, message: " 公司名称不能为空", trigger: "blur" }
        ],
        bussiness_license: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "请上传营业执照",
            trigger: "change"
          }
        ],
        trademark: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "请上传商标注册证",
            trigger: "change"
          }
        ],
        people_number: [
          { required: true, message: " 公司名称不能为空", trigger: "blur" }
        ],
        company_industry: [
          { required: true, message: " 公司名称不能为空", trigger: "blur" }
        ],
        company_nature: [
          { required: true, message: " 公司名称不能为空", trigger: "blur" }
        ],
        business_volume: [
          { required: true, message: " 公司名称不能为空", trigger: "blur" }
        ],
        contact_name: [
          { required: true, message: " 公司名称不能为空", trigger: "blur" }
        ],
        section: [
          { required: true, message: " 公司名称不能为空", trigger: "blur" }
        ]
      },
      //上传1所需数据
      defaultList1: [],
      imgName: "",
      visible: false,
      // uploadList1: [],
      //上传2所需数据
      defaultList: [],
      imgName: "",
      visible: false,
      // uploadList: [],

      //上传所需头部及api
      headers: {},
      apiurl: APIURL
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
    this.formCompany.trademark = this.$refs.upload.fileList;
    this.formCompany.bussiness_license = this.$refs.upload1.fileList;
    this.headers = {
      Authorization: `Bearer ${Cookies.get("token")}`,
      Accept: "application/vnd.huijin.v1+json"
    };
  },
  methods: {
    phone_reg(name) {
      this.current += 1;
      // var self = this;

      // this.$refs[name].validate(valid => {
      //   console.log(valid)
      //   if (valid) {

      //     self.ajax
      //       .post("/api/companyRegister", {
      //         phone: self.phoneFormValidate.phone_d,
      //         code: self.phoneFormValidate.code_d
      //       })
      //       .then(response => {
      //         self.$store.commit("login", response.data);
      //         self.current += 1;
      //         self.$Message.success("登陆成功");
      //       })
      //       .catch(error => {
      //         if (error.status_code == 403) {
      //           self.$Message.error(error.message);
      //           LUOCAPTCHA.reset();
      //           return false;
      //         }else if(error.status_code == 422){
      //           self.$Message.error(error.message);
      //         }
      //       });
      //   } else {
      //      console.log(453454)
      //     this.$Message.error("登录失败");
      //   }
      // });
    },
    bindPassword(name) {
      this.current += 1;
      // var self=this
      // this.$refs[name].validate(valid => {
      //   if (valid) {
      //     self.ajax
      //       .post("/api/updateCompanyPassword", {
      //         password: self.formCustom.passwd,
      //       })
      //       .then(response => {
      //         self.current += 1;
      //         self.$Message.success("登陆成功");
      //       })
      //       .catch(error => {
      //         if (error.status_code == 422) {
      //           self.$Message.error(error.message);
      //         }
      //       });
      //   } else {
      //     this.$Message.error("Fail!");
      //   }
      // });
    },
    bindCompany(name) {
      var self=this
      this.$refs[name].validate(valid => {
        if(valid){
      
          self.ajax
            .post("/api/bindCompany", {
              province:self.formCompany.sit[0]['code'],
              city:self.formCompany.sit[1]['code'],
              district:self.formCompany.sit[2]['code'],
              address:self.formCompany.address,
              bussiness_license:self.formCompany.bussiness_license[0]['url'],
              trademark:self.formCompany.trademark[0]['url'],
              people_number:self.formCompany.people_number,
              company_industry:self.formCompany.company_industry,
              company_nature:self.formCompany.company_nature,
              business_volume:self.formCompany.business_volume,
              contact_name:self.formCompany.contact_name,
              section:self.formCompany.section,
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
   
        }else{
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
    },
    //处理上传1的方法
    handleSuccess1(res, file) {
      console.log(file);
      file.url = res.url;
      file.name = res.url;
    },
    handleRemove1(file) {
      const fileList = this.$refs.upload1.fileList;
      this.$refs.upload1.fileList.splice(fileList.indexOf(file), 1);
    },
    //处理上传2方法
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      file.url = res.url;
      file.name = res.url;
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M."
      });
    },
    handleBeforeUpload() {
      const check = this.formCompany.trademark.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: "Up to five pictures can be uploaded."
        });
      }
      return check;
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

.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>


