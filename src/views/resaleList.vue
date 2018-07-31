<template>
    <div>
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
                <Row>
                    <i-col span="22" class="content">
                        <div style="margin-left:20px;margin-top:50px;font-size:16px">选择转售商品</div>
                        <table style="width:100%;padding:16px;border-collapse:collapse;margin-top:15px">
                            <tr style="height:35px;color:#a7a7a7;background:#f5f5f5;" >
                                <td style="padding-left:20px">时间</td>
                                <td>订单详情</td>
                                <td style="text-align:center">收货人</td>
                                <td style="text-align:center">金额</td>
                                <td style="text-align:center">全部状态</td>
                                <td style="text-align:center">操作</td>
                            </tr>
                            <Br />
                            <tbody style="width:100%">
                                <tr style="height:35px;color:#7e7e7e;background:#f5f5f5;">
                                    <td style="padding-left:20px" colspan="6">2018-05-16</td>
                                </tr>
                                <!-- 已完成 -->
                                <tr style="height:95px;" v-for="(item,index) in uniqueList">
                                    <td>
                                        <div style="width:60px;height:60px;margin-left:20px;float:left;background:#000">
                                            <!-- <img :src="i.goods_img+'?imageView2/1/w/100/h/100'" style="width:100%"> -->
                                        </div>
                                        <div style="flaot:left;margin-left:90px">
                                            <span>{{item.unique_good.goods_name}}</span>
                                            <Br />
                                            <span>官方商品</span>
                                        </div>
                                    </td>
                                    <td>
                                        X1
                                    </td>
                                    <td style="border-left:2px solid #cccccc;text-align:center">
                                        阿甘
                                        <Br /> ID: 142***789
                                    </td>
                                    <td style="border-left:2px solid #cccccc;text-align:center">
                                        总额
                                        <Br /> ￥745632.00
                                        <Br /> 在线支付
                                    </td>
                                    <td style="border-left:2px solid #cccccc;text-align:center">
                                        未转售
                                        <Br />
                                        <Br />
                                        <a>订单详情</a>
                                    </td>
                                    <td style="border-left:2px solid #cccccc;text-align:center">
                                     
                                        <a>回购</a>
                                        <Br />
                                        <Br />
                                        <router-link :to="'/resalePublish/'+$route.params.order_sn+'/'+item.order_good_id+'/'+item.unique_good_id" >转售</router-link>

                                    </td>
                                </tr>

                            </tbody>
                        </table>
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
        uniqueList:[],
    };
  },
  mounted() {
    this.index();
  },
  methods: {
    index() {
      var self = this;
      this.ajax
        .get("/api/orderGoodgetUniqueGood", {
          params: { order_good_id: self.$route.params.order_good_id }
        })
        .then(function(res) {
          self.uniqueList = res.data.goods.data;
          console.log(self.uniqueList)
        })
        .catch(function(err) {
          if (err.status_code == 404) {
            alert(err.message);
          }
        });
    }
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
  background: url(http://static.huijinjiu.com/diwen.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;
  margin-left: 32px;
  font-size: 14px;
}
.content ul {
  height: 20px;
  padding: 30px;
}
.content ul li {
  list-style: none;
  float: left;
  margin-left: 20px;
}
.content ul li > a {
  display: block;
  height: 25px;
}
</style>
