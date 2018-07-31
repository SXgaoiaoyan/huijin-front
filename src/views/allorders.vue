 <template>
     
        <!-- 内容 -->
        <div>
            <Row>
                <i-col span="22" class="content">
                    <ul>
                        <li><a @click="allorders" :class="{'select':complete_d}">全部订单</a></li>
                        <li><a @click="pay" :class="{'select':pay_d}">待付款</a></li>
                        <li><a @click="receipt" :class="{'select':receipt_d}">待收货</a></li>
                    </ul>
                    <table style="width:100%;padding:16px;border-collapse:collapse;">
                        <tr style="height:35px;color:#a7a7a7;background:#f5f5f5;">
                            <td style="padding-left:20px">时间</td>
                            <td>订单详情</td>
                            <td style="text-align:center">收货人</td>
                            <td style="text-align:center">金额</td>
                            <td style="text-align:center">全部状态</td>
                            <td style="text-align:center">操作</td>
                        </tr>
                        <Br />
                        <tbody style="width:100%" v-for = "item in orderlist.data">
                            <tr style="height:35px;color:#7e7e7e;background:#f5f5f5;">
                                <td style="padding-left:20px">{{item.updated_at}}</td>
                                <td colspan="4">订单号: {{item.order_sn}}</td>
                                <td style="text-align:center">删除</td>
                            </tr>
                            <!-- 已完成 -->
                            <tr style="height:95px;" v-if="complete_d" v-for="i in item.order_goods">
                                <td>
                                    <div style="width:60px;height:60px;margin-left:20px;float:left;background:#000">
                                        <!-- <img :src="i.goods_img+'?imageView2/1/w/100/h/100'" style="width:100%"> -->
                                    </div>
                                    <div style="flaot:left;margin-left:90px" > 
                                        <span> {{i.goods_name}}</span><Br />
                                        <span>官方商品</span>
                                    </div>
                                </td>
                                <td >
                                    X{{i.goods_number}}
                                </td>
                                <td style="border-left:2px solid #cccccc;text-align:center">
                                    {{item.consignee}}<Br />
                                    ID: {{item.id}}
                                </td>
                                <td style="border-left:2px solid #cccccc;text-align:center">
                                    总额<Br />
                                    ￥{{item.goods_amount}}<Br />
                                    在线支付
                                </td>
                                <td style="border-left:2px solid #cccccc;text-align:center">
                                    已完成<Br />
                                    <a>订单详情</a>
                                </td>
                                <td style="border-left:2px solid #cccccc;text-align:center">
                                    <a>再次购买</a><Br />
                                    <a v-show="i.is_storage==1">回购</a><Br />
                                    <router-link :to="'/resaleList/'+item.order_sn+'/'+i.id" v-show="i.is_storage==1">转售</router-link>
                                </td>
                            </tr>

                        </tbody>

                        <!-- 代付款 -->
                        <tr style="height:95px;" v-if="pay_d">
                            <td>
                                <div style="width:60px;height:60px;margin-left:20px;float:left;background:#000">
                                </div>
                                <div style="flaot:left;margin-left:90px"> 
                                    <span> 精装酒</span><Br />
                                    <span>官方商品</span>
                                </div>
                            </td>
                            <td >
                                X1
                            </td>
                            <td style="border-left:2px solid #cccccc;text-align:center">
                                gxy<Br />
                                ID: 410***123
                            </td>
                            <td style="border-left:2px solid #cccccc;text-align:center">
                                总额<Br />
                                ￥10000.00<Br />
                                在线支付
                            </td>
                            <td style="border-left:2px solid #cccccc;text-align:center">
                                代付款<Br />
                                <a>订单详情</a>
                            </td>
                            <td style="border-left:2px solid #cccccc;text-align:center">
                                <a>立即付款</a><Br />
                                <a>取消订单</a><Br />
                                <a>联系客服</a>
                            </td>
                        </tr>
                        
                        <!-- 待收货 -->
                        <tr style="height:95px;" v-if="receipt_d">
                            <td>
                                <div style="width:60px;height:60px;margin-left:20px;float:left;background:#000">
                                </div>
                                <div style="flaot:left;margin-left:90px"> 
                                    <span> 精装酒</span><Br />
                                    <span>官方商品</span>
                                </div>
                            </td>
                            <td >
                                X1
                            </td>
                            <td style="border-left:2px solid #cccccc;text-align:center">
                                gxy<Br />
                                ID: 410***123
                            </td>
                            <td style="border-left:2px solid #cccccc;text-align:center">
                                总额<Br />
                                ￥10000.00<Br />
                                在线支付
                            </td>
                            <td style="border-left:2px solid #cccccc;text-align:center">
                                待收货<Br />
                                <a>订单详情</a>
                            </td>
                            <td style="border-left:2px solid #cccccc;text-align:center">
                                <a>确认收货</a><Br />
                                <a>联系客服</a>
                            </td>
                        </tr>
                    </table>
                </i-col>
            </Row>
            <Page style="margin-left:32px" :total="orderlist.total" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
        </div>
    
</template>
<script>
export default {
  data() {
    return {
      complete_d: true,
      pay_d: false,
      receipt_d: false,
      orderlist: [],
      page: 1,
      pageSize: 10
    };
  },
  mounted() {
    this.orderlist_m();
  },
  methods: {
    //   分页
    changepage(page) {
      // console.log(page)
      this.page = page;
      this.orderlist_m();
    },
    orderlist_m() {
      var self = this;
      this.ajax
        .get("/api/order", { params: { page: self.page } })
        .then(function(res) {
          console.log(res.data.orders);
          self.orderlist = res.data.orders;
        })
        .catch(function(err) {
          if (err.status_code == 404) {
            alert(err.message);
          }
        });
    },
    allorders() {
      this.complete_d = true;
      this.pay_d = false;
      this.receipt_d = false;
    },
    pay() {
      this.complete_d = false;
      this.pay_d = true;
      this.receipt_d = false;
    },
    receipt() {
      this.receipt_d = true;
      this.complete_d = false;
      this.pay_d = false;
    }
  }
};
</script>
<style scoped>
.select {
  color: red;
  border-bottom: 2px solid red;
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

