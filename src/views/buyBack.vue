<template>
     <div class="layout">
        <Layout>
            <!-- 侧边栏 -->
            <Sider class="sider" hide-trigger style="width:150px;min-width:150px;max-width:150px;flex:0 0 150px">
                <Row>
                    <i-col span="19" offset="2">
                        <img src="../static.huijinjiu.com/personal/headborder.png" class="bk" />
                    </i-col>
                    <i-col span="3">&nbsp;</i-col>
                </Row>

                <Row>
                    <i-col span="18" offset="3" class="col1">
                        用户名六个字
                    </i-col>
                    <i-col span="3">&nbsp;</i-col>
                </Row>

                <Row>
                    <i-col span="13" offset="5" class="col2">
                        ID:12032123
                    </i-col>
                    <i-col span="6">&nbsp;</i-col>
                </Row>
                <div class="bottom">
                    <Row>
                        <i-col span="11" offset="7">
                            <ul>
                                <li>
                                    <a href="">个人资料</a>
                                </li>
                                <li>
                                    <a href="">我的酒窖</a>
                                </li>
                                <li>
                                    <a href="">全部订单</a>
                                </li>
                                <li>
                                    <a href="">我的主页</a>
                                </li>
                                <li>
                                    <a href="">我的账户</a>
                                </li>
                                <li>
                                    <a href="">我的购物车</a>
                                </li>
                                <li>
                                    <a href="">退出/切换</a>
                                </li>
                            </ul>
                        </i-col>
                        <i-col span="6"></i-col>
                    </Row>
                </div>
            </Sider>
            <Layout>
                <!-- 头部 -->
                <div class="header">                                                                                                                                            
                    <Row>
                        <i-col span="3" style="padding-left:32px">
                            <img src="../static.huijinjiu.com/personal/LOGO.png" class="logo" />
                        </i-col>
                        <i-col span="13" offset="3">
                            <ul>
                                <i-col span="6">
                                    <li>
                                        <a href="">商城首页</a>
                                    </li>
                                </i-col>
                                <i-col span="6">
                                    <li>
                                        <a href="">最新资讯</a>
                                    </li>
                                </i-col>
                                <i-col span="6">
                                    <li>
                                        <a href="">酒品分类</a>
                                    </li>
                                </i-col>
                                <i-col span="6">
                                    <li>
                                        <a href="">个人中心</a>
                                    </li>
                                </i-col>
                            </ul>
                        </i-col>
                        <i-col span="5">&nbsp;</i-col>
                    </Row>
                </div>
                <!-- 中部内容 -->
                <Row>
                    <i-col span="22" class="content">
                        <div class="type" >
                            回购商品信息
                        </div>
                        <div class="container" >
                            商品名称: &nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px" placeholder="商品名称不超过30个字"></Input><Br />
                            商品Id: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px" placeholder="请输入商品ID"></Input><Br />
                            生产日期: &nbsp;&nbsp;&nbsp;2013年1月1日 <Br />
                            产品规格: &nbsp;&nbsp;&nbsp;500ml
                            产品浓度: &nbsp;&nbsp;&nbsp;50° <Br />
                            产品类型: &nbsp;&nbsp;&nbsp;收藏版 原酒
                            产品年限: &nbsp;&nbsp;&nbsp;10年 <Br />
                            收款银行卡:<Select style="width:300px">
                                            
                                       </Select><Br />
                            购入价格: &nbsp;&nbsp;&nbsp;<span style="color:#f91515">￥123456.00</span><Br />
                            回购价格: &nbsp;&nbsp;&nbsp;<span style="color:#f91515">￥688888.00</span>  <span style="margin-left:50px">收益说明 <a>点击查看>></a></span>  <Br />           
                            

                            回购说明: &nbsp;&nbsp;&nbsp;<Input type="textarea" :rows="4" placeholder="请输入回购原因,认真填写,更容易通过审核哟~" style="width:300px;" ></Input><Br />
                            商品位置: &nbsp;&nbsp;&nbsp;<Select style="width:300px">
                                            
                                                        </Select><Br />
                            运货方式: &nbsp;&nbsp;&nbsp;<Select style="width:300px">
                                            
                                                        </Select><Br />
                            快递单号: &nbsp;&nbsp;&nbsp;<Select style="width:300px">
                                            
                                                        </Select>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a @click="address_d=true">获取收货地址>></a><Br />
                        </div>
                        
                        <Card style="width:500px;position:fixed;z-index:999;left:500px;top:400px" v-show="address_d" >
                            <div style="padding-left:40px;font-size:12px;width:445px;height:60px;line-height:60px;margin-left:auto;margin-right:auto;background:#fffaea">
                                请将藏酒快递至公司指定地址有疑问,请联系客服 <Button>点击联系客服</Button>
                            </div>
                            <div style="margin-top:20px;margin-left:100px">收件人:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;阿甘</div>
                            <div style="margin-top:10px;margin-left:100px">联系电话:&nbsp;17423564123</div>
                            <div style="margin-top:10px;margin-left:100px">邮政编码:&nbsp;000000</div>
                            <div style="margin-top:10px;margin-left:100px">收货地址:&nbsp;山西省 运城市 稷山县</div>
                        </Card> 
                        <div style="margin-top:30px;font-size:16px;font-weight:bold;border:1px solid #b4b2b3;height:34px;line-height:34px;text-indent:1em">
                            卖家联系方式
                        </div>
                        <div style="margin-left:150px;margin-top:10px">
                            卖家手机号: &nbsp;&nbsp;<Input type="text" style="width:300px" placeholder=""></Input><Br />
                        </div>
                        <Button style="margin-top:10px;margin-left:252px;width:120px;background:#ff2d24;color:white">确认回购</Button>
                    </i-col>
                </Row>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
  data() {
    return {
        address_d:false
    };
  }
};
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
  background: transparent;
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
  background: url(http://static.huijinjiu.com/diwen.png) no-repeat;
  background-size: 100% 100%;
  margin-left: 32px;
  padding: 50px;
}
.content .type {
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #b4b2b3;
  height: 34px;
  line-height: 34px;
  text-indent: 1em;
}
.content .container {
  margin-top: 20px;
  width: 600px;
  margin-left: 150px;
  letter-spacing: 1px;
  line-height: 40px;
}
</style>



