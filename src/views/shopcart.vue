<template>
        <!-- 内容 -->
        <div style="margin-left:160px">
            <Row>
                <i-col span="22" class="content">
                    <div style="font-weight:bold;margin-top:25px">我的购物车</div>
                    <!--  -->
                    <Row>
                        <table style="width:100%" class="tab">
                            <tr>
                                <i-col span="3">
                                    <th>
                                        <Checkbox style="letter-spacing:3px;padding-left:11px" :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox>
                                    </th>
                                </i-col>
                                <i-col span="11">
                                    <th style="padding-left:80px">
                                        商品
                                    </th>
                                </i-col>
                                <i-col span="3">
                                    <th>
                                        单价
                                    </th>
                                </i-col>
                                <i-col span="3">
                                    <th>
                                        数量
                                    </th>
                                </i-col>
                                <i-col span="2">
                                    <th>
                                        小计
                                    </th>
                                </i-col>
                                <i-col span="2">
                                    <th>
                                        操作
                                    </th>
                                </i-col>
                            </tr>
                        </table>
                    </Row>
                    <!-- 官方商品 -->
                    <div style="height:41px;line-height:41px">
                        <Checkbox style="letter-spacing:3px;padding-left:11px">
                            官方商品
                        </Checkbox>
                    </div>
                    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                        <!--  -->
                        <Row>
                            <table style="width:100%" class="tab1">
                                <tr v-for="(item,index) in carts">
                                    <i-col span="3">
                                        <td style="padding-top:20px">
                                            <Checkbox :label="index" style="letter-spacing:3px;margin-left:6px">{{item.model.goods_name}}</Checkbox>
                                        </td>
                                    </i-col>
                                    <i-col span="4">
                                        <td style="float:left;padding-top:20px">
                                            <!-- <div style="width:79px;height:79px;float:left"><img :src="item.model.goods_img+'?imageView2/1/w/100/h/100'" style="width:100%"></div> -->
                                            <div style="width:79px;height:79px;float:left"><img :src="item.products?item.products.goods_attr_img:item.model.goods_img" style="width:100%"></div>
                                            <div style="float:left;padding-left:10px;line-height:25px">
                                                <span>{{item.model.goods_name}}</span>
                                                <Br />
                                                <span>出产日期: 2013-07-15</span>
                                                <Br />
                                                <span>储藏年限: 10年</span>
                                                <Br />
                                            </div>
                                        </td>

                                    </i-col>
                                    <i-col span="7">
                                        <td v-for="i in item.atts" style="margin-left:5px;padding-top:40px">
                                            {{i.attribute.attr_name}}:{{i.attr_value}}
                                        </td>
                                    </i-col>
                                    <i-col span="2">
                                        <td style="padding-top:20px">
                                            ¥{{item.price}}
                                        </td>
                                    </i-col>
                                    <i-col span="4">
                                        <td style="padding-left:30px;padding-top:20px">
                                            <button type="button" class="minus" @click="minuscart_m(item.rowId)">-</button>
                                            <div class="qty">{{item.qty}}</div>
                                            <button type="button" class="add" @click="addcart_m(item.rowId)">+</button>
                                        </td>
                                    </i-col>
                                    <i-col span="2">
                                        <td style="padding-top:20px">
                                            ¥{{item.subtotal}}
                                        </td>
                                    </i-col>
                                    <i-col span="2">
                                        <td style="padding-top:20px">
                                            <a style="color:#939393" @click="removecart_m(item.rowId)">删除</a>
                                            <Br />
                                            <a style="color:#939393">加入收藏</a>
                                        </td>
                                    </i-col>
                                </tr>

                            </table>
                        </Row>
                    </CheckboxGroup>
                    <Row>
                        <div style="width:100%" class="footer">
                            <i-col span="15">
                                <Button @click="clearcart_m" style="letter-spacing:3px;padding-left:11px">清空购物车</Button>
                            </i-col>
                            <i-col span="6">
                                总价: &nbsp;&nbsp;
                                <span style="color:red">¥{{totalMoney}}</span>
                            </i-col>
                            <i-col span="3">
                                <button type="button" @click="close" style="width:100%;background:red;color:white;border:none;outline:none">结算</button>
                            </i-col>
                        </div>
                    </Row>
                </i-col>
                <i-col span="2">
                    &nbsp;
                </i-col>
            </Row>
        </div>

</template>
<script>
export default {
  data() {
    return {
      carts: [],
      checkedAll: false,
      indeterminate: true,
      checkAllGroup: [],
      cartAll: [],
      checkAll: false
    };
  },
  mounted() {
    this.displaycart_m();
  },
  methods: {
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        var arr = [];

        for (const key in this.carts) {
          if (this.carts.hasOwnProperty(key)) {
            arr.push(parseInt(key));
          }
        }

        this.checkAllGroup = arr;
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data) {
      if (data.length === this.carts.length) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    },
    displaycart_m() {
      var self = this;
      this.ajax
        .get("/api/cart/display")
        .then(function(res) {
          var cart = (self.carts = res.data.cart);
        })
        .catch(function(err) {
          if (err.status_code == 422) {
            console.log(err.message);
          }
        });
    },

    // 删除
    removecart_m(id) {
      var self = this;
      if (confirm("确定要删除吗?")) {
        this.ajax
          .post("/api/cart/remove", {
            rowId: id
          })
          .then(function(res) {
            self.carts = res.data.cart;
          })
          .catch(function(err) {
            if (err.status_code == 422) {
              console.log(err.message);
            }
          });
      }
    },
    // 增加
    addcart_m(id) {
      var self = this;

      this.ajax
        .post("/api/cart/plus", {
          rowId: id
        })
        .then(function(res) {
          self.carts = res.data.cart;
        })
        .catch(function(err) {
          if (err.status_code == 422) {
            console.log(err.message);
          }
        });
    },
    // 减少
    minuscart_m(id) {
      var self = this;
      this.ajax
        .post("/api/cart/minus", {
          rowId: id
        })
        .then(function(res) {
          self.carts = res.data.cart;
        })
        .catch(function(err) {
          if (err.status_code == 422) {
            console.log(err.message);
          }
        });
    },
    // 清空购物车
    clearcart_m() {
      var self = this;
      this.ajax
        .post("/api/cart/clear")
        .then(function(res) {
          self.carts = res.data.cart;
        })
        .catch(function(err) {
          if (err.status_code == 422) {
            console.log(err.message);
          }
        });
    },
    //结算
    close() {
      var self = this;
      if(this.checkAllGroup.length==0){
        self.$Message.error('你还未勾选商品');
        return false
      }
      var rowId = [];
      for (const key in this.checkAllGroup) {
        if (this.checkAllGroup.hasOwnProperty(key)) {
          rowId.push(this.carts[key].rowId);
        }
      }

      this.$router.push({
        name: "submitorder",
        query: { rowId: rowId }
      });
    }
  },
  computed: {
    totalMoney() {
      var total = 0;
      for (const key in this.checkAllGroup) {
        if (this.checkAllGroup.hasOwnProperty(key)) {
          total += this.carts[key].subtotal;
        }
      }
      return total;
    }
  }
};
</script>
<style scoped>

/* 内容 */
.content {
  height: 820px;
  background: url(http://static.huijinjiu.com/diwen.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;
  padding: 6px;
  margin-left: 32px;
}
.content .tab {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  height: 42px;
  color: #939393;
  font-size: 12px;
  margin-top: 5px;
  line-height: 42px;
}
.content .tab1 {
  height: 120px;
  color: #939393;
  font-size: 12px;
  border-top: 2px solid #aaa;
  border-bottom: 2px solid #aaa;
}

.content .minus {
  width: 24px;
  height: 22px;
  border: 1px solid #aaaaaa;
  outline: 0;
  float: left;
}
.content .qty {
  width: 50px;
  text-align: center;
  border: none;
  height: 22px;
  border: 1px solid #aaaaaa;
  float: left;
  line-height: 22px;
}
.content .add {
  width: 24px;
  height: 22px;
  border: 1px solid #aaaaaa;
  outline: 0;
}
/* 脚部 */
.footer {
  height: 40px;
  background-color: #ffffff;
  line-height: 40px;
  /* margin-top: 200px; */
}
</style>


