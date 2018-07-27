<template>
    <div>
        <Row>
            <i-col span="21">
                <div class="content">
                    <div class="bg">
                        <!-- 真实姓名 -->
                        <div style="width:100px;height:100px;border-radius:100%;background:#b1d8fc;position:absolute;left:80px;top:80px"></div>
                        <div style="margin-left:190px;padding-top:80px">
                            <span style="font-size:18px;font-weight:blood">真实姓名:阿甘</span>
                            <Br />
                            <Br />
                            <Br />
                            帐户名: &nbsp;112****4569 <span style="margin-left:100px">上次登录时间: &nbsp;2018.02.03 12:40:18</span>
                        </div> 
                    </div>
                    <!-- 账户 -->
                    <div style="border:1px solid #d9d9d9;height:94px;margin-top:15px">
                        <div style="margin-top:20px;margin-left:20px">账户余额</div>
                        <Br />
                        <span style="font-size:18px;color:#737373;margin-left:20px">666.00元</span>
                        <Button style="margin-left:50px">充值</Button>
                        <Button style="margin-left:20px">提现</Button>
                        <span style="margin-left:50px;font-size:14px">累计收益:50.00元</span>
                    </div>
                    <div class="record" >交易纪录</div>
                    <ul>
                        <li><a :class="{'select':record}" @click="record_m">最近交易记录</a></li>
                        <li><a :class="{'select':pay_d}" @click="pay_m">充值记录</a></li>
                        <li><a :class="{'select':money_d}" @click="money_m">提现记录</a></li>
                        <li><a :class="{'select':refund_d}" @click="refund_m">退款记录</a></li>
                    </ul>
                    <table v-show="a">
                        <tr>
                            <td style="padding-left:30px">
                                2016.08.09 
                                   10:00
                            </td>
                            <td>
                                充值-普通充值<Br />
                                <span style="color:#bfbfbf">gxy ▏流水号: 1475632</span>
                            </td>
                            <td style="text-align:center">
                                充值金额<Br />
                                688888.00
                            </td>
                            <td style="text-align:center;color:#fb8647">
                                交易成功
                            </td>
                            <td style="text-align:center"><a>删除记录</a></td>
                        </tr>
                        <tr>
                            <td style="padding-left:30px">
                                2016.08.09 
                                   10:00
                            </td>
                            <td>
                                充值-普通充值<Br />
                                <span style="color:#bfbfbf">gxy ▏流水号: 1475632</span>
                            </td>
                            <td style="text-align:center">
                                充值金额<Br />
                                688888.00
                            </td>
                            <td style="text-align:center;color:#fb8647">
                                交易成功
                            </td>
                            <td style="text-align:center"><a>删除记录</a></td>
                        </tr>
                    </table>
                </div>
            </i-col>
            <i-col ></i-col>
        </Row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            record:true,
            pay_d:false,
            money_d:false,
            refund_d:false,
            a:false
        }
    },
    methods: {
        // 最近交易
        record_m() {
            this.record = true;
            this.pay_d = false;
            this.money_d = false;
            this.refund_d = false;
        },
        // 充值记录
        pay_m() {
            this.record = false;
            this.pay_d = true;
            this.money_d = false;
            this.refund_d = false;
            this.a = true;
            
        },
        // 提现记录
        money_m() {
            this.record = false;
            this.pay_d = false;
            this.money_d = true;
            this.refund_d = false;
            this.a = false;
        },
        //退款记录
        refund_m() {
            this.record = false;
            this.pay_d = false;
            this.money_d = false;
            this.refund_d = true;
            this.a = false;
        }
         
    }
};
</script>

<style scoped>
.select{
    color:#737373
}
.content {
  height: 900px;
  background: url(http://static.huijinjiu.com/diwen.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;
  margin-left: 32px;
}
.content .bg {
  height: 200px;
  background: url(http://static.huijinjiu.com/theme.png) no-repeat;
  background-size: 100% 100%;
}
.content .record {
  height: 34px;
  border: 1px solid #d9d9d9;
  background: #e3e3e3;
  line-height: 34px;
  padding-left: 30px;
  font-size: 16px;
  margin-top:20px
}
.content ul{
    border:1px solid #d9d9d9;
    height:34px
}
.content ul li{
    list-style: none;
    float:left;
    margin-left:30px;
    line-height:34px;
    
    
}
.content ul li>a{
    font-size:16px;
}
.content table{
    width:100%;
    border:1px solid #d9d9d9;
    border-collapse: collapse;
    font-size:15px
}
.content table tr{
    border:1px solid #d9d9d9;
    height:70px
}
</style>
