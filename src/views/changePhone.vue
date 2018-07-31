<template>
     <div style="margin-left:160px">
        <Row>
            <i-col span="22" class="content">
                <div class="bind">换绑手机号</div>
                <Card style="margin-top:76px;width:500px;margin-left:auto;margin-right:auto" >
                    <Steps :current="current" style="margin-left:30px">
                        <Step title="第一步" content="输入新手机号"></Step>
                        <Step title="第二步" content="身份认证"></Step>
                        <Step title="换绑成功" content="换绑成功"></Step>
                    </Steps>
                     <!-- 输入新手机号验证  -->
                    <div style="width:420px;margin-left:auto;margin-right:auto" v-show="current==0">
                        <Form >
                            <FormItem>
                            <Input type="text" placeholder="请输入新手机号" style="margin-top:20px" clearable size="large">
                                <span slot="prepend"> 中国+86 </span>
                            </Input>
                            </FormItem>

                            <FormItem>
                                    <Button class='login' @click="next_m">
                                        下一步
                                    </Button>
                            </FormItem>
                        </Form>
                    </div>
                    <!-- 输入原手机号验证码 -->
                    <div style="width:420px;margin-left:auto;margin-right:auto;font-size:16px" v-show="current==1">
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
                                <Button class='login' @click="twoStep_m">
                                    下一步
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                    <!-- 换绑成功 -->
                     <div style="width:430px;margin-left:auto;margin-right:auto" v-show="current==2">
                        <img src="../static.huijinjiu.com/personReg/sign.png" style="margin-left:138px;margin-top:40px"/>
                        <Br />
                        <Br />
                        <div style="font-size:16px;text-align:center">
                            恭喜你成功换绑!如不自动跳转请<a style="color:red">点击这里</a>
                        </div>
                    </div>  
                </Card>
            </i-col>
        </Row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current:0,
            
        }
    },

     methods: {
        next_m() {
            if (this.current == 2) {
                this.current = 0;
            } else {
                this.current += 1;
            }
        },
        twoStep_m() {
        if (this.current == 2) {
                this.current = 0;
            } else {
                this.current += 1;
            }
        },
     
   }
        

};
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
