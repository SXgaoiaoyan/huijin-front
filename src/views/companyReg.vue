
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
          <!--  -->
          <Card style="margin-top:76px;width:600px;margin-left:auto;margin-right:auto">
            <Steps :current="current" style="margin-left:30px">
              <Step title="第一步" content="验证手机号"></Step>
              <Step title="第二步" content="填写帐号信息"></Step>
              <Step title="第三步" content="填写公司信息"></Step>
              <Step title="成功" content="注册成功"></Step>
            </Steps>
            <!-- 验证手机号 -->
             <div style="width:420px;margin-left:auto;margin-right:auto" v-show="step">
              <Form >
                  <FormItem>
                    <Input type="text" placeholder="请输入常用手机号"   style="margin-top:20px" clearable size="large">
                        <span slot="prepend"> 中国+86 </span>
                    </Input>
                  </FormItem>
                  <FormItem>
                      <Input type="text" placeholder="请输入短信验证码"  clearable size="large">
                      <span slot="prepend">手机验证码</span> -->
                      <!-- <span  slot="append"  style="cursor:pointer">请先进行人机验证</span> -->
                      <span  slot="append"  style="cursor:pointer">发送验证码</span>
                      <!-- <span  slot="append" style="cursor:pointer">s后重新获取</span> -->
                       </Input> 
                  </FormItem> 

                 <FormItem>
                    <Checkbox >
                        我已阅读并同意<a> <<喜马拉雅用户注册协议和隐私条款>> </a>
                    </Checkbox>
                        <Button type="primary" class='login' @click="next_m">
                          下一步
                    </Button>
                    
                    <div style="margin-top:15px">
                        <router-link to="/personReg"><img src="../static.huijinjiu.com/companyReg/user.png" style="vertical-align:middle"/> <span style="color:black">个人用户注册</span></router-link>
                    </div>
                </FormItem>
              </Form>
            </div> 
            <!-- 填写密码 -->
            <div style="width:420px;margin-left:auto;margin-right:auto" v-show="step1">
              <Form>
                  <FormItem style="margin-top:20px">
                      <Input type="text" size="large" placeholder="设置数字与字母的密码">
                      <span slot="prepend">设置密码</span>
                      </Input>
                  </FormItem>
                  <FormItem>
                      <Input type="text" size="large" placeholder="再次输入密码">
                      <span slot="prepend">确认密码</span>
                      </Input>
                  </FormItem>
                  <FormItem>
                      <Button class="login" @click="twoStep_m">下一步</Button>
                  </FormItem>
              </Form>
              <div style="margin-top:15px">
                  <a><img src="../static.huijinjiu.com/companyReg/user.png" style="vertical-align:middle"/> <span style="color:black">个人用户注册</span></a>
              </div>
            </div>
            <!-- 公司信息 -->
            <div style="width:430px;margin-left:auto;margin-right:auto;" v-show="step2">
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
                      <!-- < <Button>浏览</Button>   -->
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
                      <Button class='login' @click="threeStep_m">
                          立即注册
                      </Button>
                  </FormItem> 
              </Form>
            </div>

            <!-- 注册成功 -->
            <div style="width:430px;margin-left:auto;margin-right:auto" v-show="step3">
              <img src="../static.huijinjiu.com/personReg/sign.png" style="margin-left:138px;margin-top:40px"/>
              <Br />
              <Br />
              <div style="font-size:16px;text-align:center">
                  恭喜你成功注册!如不自动跳转请<a style="color:red">点击这里</a>
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
     return {
        current:0,
        step:true,
        step1:false,
        step2:false,
        step3:false,
        resArr:[]
     }
   },
   methods: {
     next_m() {
       this.step = false;
       this.step1 = true;
       this.step2 = false;
       this.step3 = false;
        if (this.current == 3) {
            this.current = 0;
        } else {
            this.current += 1;
        }
     },
     twoStep_m() {
          this.step = false;
          this.step1 = false;
          this.step2 = true;
          this.step3 = false;
       if (this.current == 3) {
            this.current = 0;
        } else {
            this.current += 1;
        }
     },
     threeStep_m() {
        this.step = false;
          this.step1 = false;
          this.step2 = false;
          this.step3 = true;
          if (this.current == 3) {
            this.current = 0;
        } else {
            this.current += 1;
        }
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
  background-color: white
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


</style>


