<template>
<div>
    <Card style="margin-top:76px;width:430px;margin-left:auto;margin-right:auto" >
        <img src="../static.huijinjiu.com/personReg/verify.png" />
        <div>
            <Form >
                <FormItem>
                <Input type="text" placeholder="请输入常用手机号" class="phone" clearable size="large">
                    <span slot="prepend"> 中国+86 </span>
                </Input>
                </FormItem>

                <FormItem>
                    <Checkbox >
                        我已阅读并同意<a> <<喜马拉雅用户注册协议和隐私条款>> </a>
                    </Checkbox>
                    <router-link to="/personReg_pwd">
                        <Button class='login'>
                            下一步
                        </Button>
                    </router-link>
                    <div style="margin-top:15px">
                        <!-- <a><img src="../static.huijinjiu.com/companyReg/user.png" style="vertical-align:middle"/> <span style="color:black">企业用户注册</span></a> -->
                        <router-link to="/companyReg"><img src="../static.huijinjiu.com/companyReg/user.png" style="vertical-align:middle"/> <span style="color:black">企业用户注册</span></router-link>
                    </div>
                </FormItem>
            </Form>
        </div>
    </Card>
</div>          
</template>

<script>
export default {};
</script>

<style scoped>
.content .phone {
  margin-top: 20px;
  font-size: 14px;
}
.content .login {
  width: 100%;
  height: 40px;
  border: 1px solid #ff3430;
  outline: none;
  background-color: #fe706e;
  font-size: 19px;
  color: white;
  letter-spacing: 10px;
}
</style>
