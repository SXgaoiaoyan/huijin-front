<template>
    <div>
        <Card style="width:430px;margin-left:auto;margin-right:auto">
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
                    <router-link to ="/companyReg_company">
                        <Button class="login">立即注册</Button>
                    </router-link>
                </FormItem>
            </Form>
            <div style="margin-top:15px">
                <a><img src="../static.huijinjiu.com/companyReg/user.png" style="vertical-align:middle"/> <span style="color:black">个人用户注册</span></a>
            </div>
          </Card>
    </div>
 </template>

<script>
export default {

}
</script>

<style scoped>
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
