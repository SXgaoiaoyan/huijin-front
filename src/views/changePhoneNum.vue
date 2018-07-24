<template>
    <div>
         <Row>
            <i-col span="22" class="content">
                <div class="bind">换绑手机号</div>
                <div style="margin-top:76px;width:410px;margin-left:auto;margin-right:auto;font-size:16px" >
                <img src="../static.huijinjiu.com/changePhone/identity.png" />
                    <Br />
                    <Br />
                    原手机号:185****3416
                    <Form >
                        <FormItem>
                            <Input type="text" placeholder="请输入原手机号验证码" style="margin-top:20px" clearable size="large">
                                <span slot="append" style="cursor:pointer">获取验证码</span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            
                            <Button class='login'>
                                下一步
                            </Button>
                            
                        </FormItem>
                    </Form>
                </div>
            </i-col>
            
            
        </Row>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.bind {
  font-weight: bold;
  padding-left: 44px;
  height: 120px;
  line-height: 120px;
  font-size: 16px;
  border-bottom: 2px solid #737373;
}
.content {
  padding: 44px;
  height: 840px;
  margin-left: 24px;
  margin-top: 10px;
  background: url(http://static.huijinjiu.com/diwen.png) no-repeat;
  background-size: 100% 100%;
}
.content .login {
  width: 100%;
  height: 40px;
  outline: none;
  background-color: #2f86f7;
  font-size: 19px;
  color: white;
  letter-spacing: 10px;
}
</style>
