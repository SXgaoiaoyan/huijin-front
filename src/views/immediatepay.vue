<template>
    <div style="margin-left:160px">
        <Row>
            <i-col span="22"  class="content">
                <div style="height:95px;border-bottom:4px solid #4a5b77;padding:45px;font-weight:bold">
                    <span style="float:left">提交订单</span>
                    <img style="float:right" src="../static.huijinjiu.com/submitorder/web2.png" />
                </div>
                <!-- 渲染的数据 -->
                <div style="font-size:16px;margin-left:46px">订单编号:1436543654</div>
                <div v-for="i in ordershow">
                    <!-- 订单编号 -->
                    <!-- 收货人 -->
                    <div style="width:100%;padding-left:46px;margin-top:40px;height:50px;border-bottom:1px solid #bfbfbf">
                        <div style="font-size:17px;float:left">
                        收货人
                        </div>
                        <div style="padding:4px;width:400px;line-height:30px;margin-left:160px;border:1px solid #b1c1e2;font-size:15px">
                            {{i.consignee}} &nbsp;&nbsp; {{areaData[i.country][i.province]+areaData[i.province][i.city]+areaData[i.city][i.district]+areaData[i.district][i.street]}}&nbsp;&nbsp;{{i.mobile}}
                        </div>
                    </div>
                    <!-- 配送方式 -->
                    <div style="width:100%;padding-left:46px;margin-top:40px;height:50px;border-bottom:1px solid #bfbfbf">
                        <div style="font-size:17px;float:left">
                        配送方式
                        </div>
                        <div style="width:250px;line-height:30px;margin-left:160px;font-size:15px">
                            申通快递 &nbsp;&nbsp;运费 &nbsp;¥ 800.00
                        </div>
                    </div>
                    <!-- 发票信息 -->
                    <div style="width:100%;padding-left:46px;margin-top:40px;height:50px;">
                        <div style="font-size:17px;float:left">
                        发票信息
                        </div>
                        <div style="width:250px;line-height:30px;margin-left:160px;font-size:15px">
                            普通发票 &nbsp;&nbsp;(电子) &nbsp;&nbsp;个人发票 &nbsp;&nbsp;<a>查看</a>
                        </div>
                    </div>
                </div>

                <div style="margin-top:50px;margin-left:46px">
                    <Button style="font-size:20px;color:white;background:#fe706e;border-color:#ff4948;" @click="payment">立即付款</Button>
                </div>
            </i-col>
            <!-- <i-col span="2">&nbsp;</i-col> -->
        </Row>

    </div>
</template>

<script>
import areaData from "area-data";
export default {
    data() {
        return {
            orderlist :[],
            ordershow :[],
        
        }
    }, 
    mounted() {
        this.ordershow_m();
        this.areaData = areaData
    },
    methods:{
        
        ordershow_m(){
            var self =this;
            this.ajax.get("/api/order/"+self.$route.query.id)
            .then(function(res){
                // console.log(res.data.order_info)
                self.ordershow = res.data
            }).catch(function(err){
                 if (err.status_code == 404) {
                    alert(err.message);
                }
            })
        },
        payment() {
            window.location = "http://api.huijinjiu.com/alipay?order_sn="+this.ordershow.order_info.order_sn            
        }

    }
}
</script>
<style scoped>
.ivu-layout {
  width: 100%;
  background: url(http://static.huijinjiu.com/personalBj.jpg) no-repeat;
  background-size: 100% 100%;
  font-size: 16px;
}

.sider {
  width: 100%;
  height: 970px;
  background: url(../static.huijinjiu.com/personal/siderImg.png) no-repeat;
  background-size: 100% 100%;
}
.sider .bk {
  width: 100%;
  height: 100%;
  background: url(../static.huijinjiu.com/personal/head.png) no-repeat center;
  margin-top: 102px;
}
.sider .col1 {
  color: #000000;
  font-weight: bold;
  margin-top: 9px;
}
.sider .col2 {
  font-weight: bold;
  color: #000000;
  font-size: 11px;
  margin-top: 9px;
}
.sider ul {
  margin-top: 40px;
}
.sider ul li {
  list-style: none;
  line-height: 55px;
  font-size: 12px;
}
.sider ul li a {
  font-weight: bold;
  color: #000000;
}

.header {
  width: 100%;
  height: 120px;
  box-shadow: 0 5px 5px #b5b5b5;
  background: transparent
}
.header .logo {
  margin-top: 32px;
}
.header ul li {
  list-style: none;
  float: left;
  line-height: 116px;
  letter-spacing: 2.5px;
}
.header ul li a {
  color: #010101;
}
.header ul li:hover {
  border-bottom: 4px solid #a8d3fe;
}
.content {
  margin-top: 10px;
  background: #fff;
  margin-left: 32px;
}
</style>

