<template>
<div>
     <Card style="margin-top:76px;width:430px;margin-left:auto;margin-right:auto">
            <img src="../static.huijinjiu.com/companyReg/verify.png" />
            <div>
              <Form >
                  <FormItem>
                    <Input type="text" placeholder="请输入常用手机号"   style="margin-top:20px" clearable size="large">
                        <span slot="prepend"> 中国+86 </span>
                    </Input>
                  </FormItem>
                

                <FormItem>
                    <Input type="text" placeholder="请输入短信验证码"  clearable size="large">
                    <span slot="prepend">手机验证码</span>
                    <!-- <span  slot="append"  style="cursor:pointer">请先进行人机验证</span> -->
                    <span  slot="append"  style="cursor:pointer">发送验证码</span>
                    <!-- <span  slot="append" style="cursor:pointer">s后重新获取</span> -->
                    </Input>
                </FormItem>

                <FormItem>
                    <Checkbox >
                        我已阅读并同意<a> <<喜马拉雅用户注册协议和隐私条款>> </a>
                    </Checkbox>
                    <router-link to ="/companyReg_pass">
                        <Button class='login' >
                          下一步
                        </Button>
                    </router-link>
                    
                    <div style="margin-top:15px">
                        <router-link to="/personReg"><img src="../static.huijinjiu.com/companyReg/user.png" style="vertical-align:middle"/> <span style="color:black">个人用户注册</span></router-link>
                    </div>
                </FormItem>
              </Form>
            </div>
          </Card>
         </div> 
</template>

<script>
export default {

}
</script>
<style scoped>
.content{
  height:680px
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
</style>
