<template>
  <div>

    <!--内容-->
    <div class="content">
      <Row>
        <i-col span="8" offset="1">
          <div class="s1">
            <span style="font-size: 58px;">汇金</span>
            <span style="font-size: 42px;">原浆酒</span>
            <ul>
              <Row>
                <i-col span="6" offset="4">
                  <li>芝香清冽</li>
                </i-col>
                <i-col span="6">
                  <li>醉时愉悦</li>
                </i-col>
                <i-col span="6">
                  <li>醒后喜悦</li>
                </i-col>
              </Row>
            </ul>
            <ol>
              <i-col span="12">&nbsp;</i-col>
              <i-col span="6">
                <li>十年陈酿</li>
              </i-col>
              <i-col span="6">
                <li>惊世绽放</li>
              </i-col>
            </ol>
            <!--分量-->
            <Row>
              <i-col span="18" style="margin-top: 30px;">
                <Row v-for="(item,index) in order_attr" style="margin-top:5px">
                  <i-col span="4" style="text-align:center;font-size: 15px;line-height: 45px;">
                    {{item.attr_name}}
                  </i-col>

                  <i-col span="20" style="margin-top:10px">
                    <RadioGroup type="button" v-model="selects[index]" @input="selectChange">

                      <Radio style="margin-left:10px" size="large" v-for="(i,index1) in item.goods_attr" :label="i.id" :disabled="isDisable(i.id,index)">{{i.attr_value}}</Radio>

                    </RadioGroup>
                  </i-col>
                </Row>
              </i-col>
              <i-col span="6">&nbsp;</i-col>
            </Row>
            <!--价格-->
            <Row>
              <i-col span="12" offset="1">
                <div class="money">
                  ¥
                  <span style="font-size: 28px;">{{price}}</span>
                </div>
                <i-col span="11">&nbsp;</i-col>
              </i-col>
            </Row>

            <Row>
              <i-col span="6">
                <Button class="buy" @click="buynow_m">立即购买</Button>
              </i-col>
              <i-col span="6" offset="5">
                <Button class="addcart" @click="addcart_m">加入购物车</Button>
              </i-col>
            </Row>
          </div>
        </i-col>

        <i-col span="14">
          <img :src="img" class="img1" />
        </i-col>
        <i-col span="2">&nbsp;</i-col>
      </Row>
    </div>

    <!--中部内容-->
    <div class="center">

    </div>
    <!--脚部-->
    <div class="footer">
      <Row>
        <i-col span="6">
          <img src="../static.huijinjiu.com/wineclass/lotus.png" />
        </i-col>

        <i-col span="1">
          <ul>
            <li>
              <a href="">关于我们</a>
            </li>
            <li>
              <a href="">联系我们</a>
            </li>
            <li>
              <a href="">加入我们</a>
            </li>
          </ul>

        </i-col>
        <i-col span="4" offset="2">
          <p class="p1">注意未满十八岁,禁止购买!</p>
        </i-col>
        <i-col span="2" offset="3">
          <div class="gz">
            关注公众号
            <div class="we">
              加入我们
            </div>
          </div>
        </i-col>
        <i-col span="2" offset="1">
          <img src="../static.huijinjiu.com/wineclass/code.png" class="img3" />
        </i-col>
        <i-col span="3">&nbsp;</i-col>
      </Row>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      good: "",
      goods: "",
      selects: [],
      price: "",
      img: "",
      selectSucess: true,
      order_attr: [],
      hasStorageArr: []
    };
  },
  mounted() {
    this.details();
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    isDisable(id, index) {
      if (this.hasStorageArr[index].indexOf(id) == -1) {
        return true;
      } else {
        return false;
      }
    },
    selectChange() {
      this.stockout();
      var object = this.selects;
      var basePrice = parseFloat(this.good.market_price);
      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          var select = object[key];

          var attrs = this.good.attrs;
          for (const key in attrs) {
            if (attrs.hasOwnProperty(key)) {
              const element = attrs[key];

              if (element.id == select) {
                basePrice += parseFloat(element.attr_price);
              }
            }
          }
        }
      }
      this.price = basePrice;

      var products = this.good.products;

      var has = false;

      for (const key in products) {
        if (products.hasOwnProperty(key)) {
          const element = products[key];
          var dd = JSON.parse(JSON.stringify(this.selects));
          if (
            dd.sort().toString() ==
            JSON.parse(element.goods_attr)
              .sort()
              .toString()
          ) {
            this.img = element.goods_attr_img;
            has = true;
            this.selectSucess = true;
          }
        }
      }

      if (!has) {
        this.price = 0;
        this.img = "http://static.huijinjiu.com/135060426634397841.png";
        this.selectSucess = false;
      }
    },
    tz() {
      this.$router.push({
        name: "shopcart"
      });
    },
    stockout() {
      //全局数组变量用来存储有库存id
      var allHasArr = [];
      //转换商品属性
      var order_attr = this.order_attr;

      //循环商品属性
      for (const key1 in order_attr) {
        //把selects转换对象
        const selectsCopy = JSON.parse(JSON.stringify(this.selects));
        if (order_attr.hasOwnProperty(key1)) {
          const goods_attr = order_attr[key1].goods_attr;
          //存放对应index存在的id；
          var indexHasArr = [];
          //循环属性里的具体规格
          for (const key2 in goods_attr) {
            //全局数组用来存放有库存的id

            if (goods_attr.hasOwnProperty(key2)) {
              const attr = goods_attr[key2];
              //将select里的id替换出来
              selectsCopy[key1] = attr.id;
              //循环products匹配是否有库存
              var products = this.good.products;
              var has = false;
              for (const key3 in products) {
                if (products.hasOwnProperty(key3)) {
                  const product = products[key3];
                  //将dd对象转换
                  var selectsCopyCopy = JSON.parse(JSON.stringify(selectsCopy));
                  //对比是否有库存
                  if (
                    selectsCopyCopy.sort().toString() ==
                    JSON.parse(product.goods_attr)
                      .sort()
                      .toString()
                  ) {
                    indexHasArr.push(attr.id);
                  }
                }
              }
              // console.log(rr)
            }
          }
          // this.selects[key]
        }
        allHasArr[key1] = indexHasArr;
      }

      this.hasStorageArr = allHasArr;
    },
    details() {
      var self = this;
      this.ajax
        .get("/api/goods/" + self.$route.params.id)
        .then(response => {
          self.good = response.data.good;

          if (self.good.goods_type) {
            var object = (self.order_attr = self.good.goods_type.order_attr);

            for (const key in object) {
              if (object.hasOwnProperty(key)) {
                const element = object[key];
                self.selects.push(element.goods_attr[0].id);
              }
            }
            self.selectChange();
          }

          // self.price = parseFloat(self.good.market_price);
          // self.img = self.good.goods_img;
        })
        .catch(error => {
          if (error.status_code == 404) {
            alert(error.message);
          }
        });
    },
    // 加入购物车
    addcart_m() {
      if (this.selectSucess == false) {
        this.$Message.error("请选择正确规格");
        return false;
      }
      var self = this;

      var data = {};
      var dd = JSON.parse(JSON.stringify(this.selects));
      if (this.good.attrs.length > 0) {
        data.good_id = self.good.id;
        data.spe = dd.sort();
      } else {
        data.good_id = self.good.id;
      }

      this.ajax
        .post("/api/cart/add", data)
        .then(function(res) {
          self.$Message.success("添加购物车成功");
        })
        .catch(function(err) {
          if (err.status_code == 422) {
            alert(error.message);
          }
        });
    },
    logout_m() {
      this.$store.commit("logout");
    },
    // 立即购买
    buynow_m() {
      if (this.selectSucess == false) {
        this.$Message.error("请选择正确规格");
        return false;
      }
      var self = this;
      var data = {};
      var dd = JSON.parse(JSON.stringify(this.selects));
      if (this.good.attrs.length > 0) {
        data.good_id = self.good.id;
        data.spe = dd.sort();
      } else {
        data.good_id = self.good.id;
      }

      this.ajax
        .post("/api/BuyNowCart/cart", data)
        .then(function(res) {
          console.log(res.data.cart);
          self.goods = res.data.cart;
          var rowId = [];
          rowId.push(self.goods[0].rowId);
          self.$router.push({
            name: "submitorder",
            query: {
              rowId: rowId,
              type: "buynow"
            }
          });
        })
        .catch(function(err) {
          if (err.status_code == 422) {
            console.log(err.message);
          }
        });
    }
  }
};
</script>


<style scoped>
.red {
  border: 1px solid #e20909;
}
.detail {
  width: 100%;
  height: 2164px;
  background: url(http://static.huijinjiu.com/bg.png) no-repeat;
  background-size: 100% 2164px;
}
/*头部*/
.header {
  width: 100%;
  height: 120px;
  box-shadow: 0 3px 8px #b5b5b5;
}
.header .logo {
  margin-top: 32px;
}
.header ul li {
  list-style: none;
  float: left;
  font-size: 16px;
  line-height: 116px;
  letter-spacing: 2.5px;
}
.header ul li a {
  color: #010101;
}
.header ul li:hover {
  border-bottom: 4px solid #a8d3fe;
}
/*内容*/
.content {
  width: 100%;
  margin-top: 81px;
}
.content .s1 {
  margin-top: 92px;
}
.content ul li,
ol li {
  float: left;
  list-style: none;
  font-size: 17px;
  color: #000000;
  margin-top: 20px;
}

.content .img1 {
  width: 100%;
  height: 521px;
}

.content .s1 .money {
  font-size: 37px;
  color: red;
  letter-spacing: 2px;
  margin-top: 20px;
}
.content .buy,
.content .addcart {
  border-radius: 0;
  height: 36px;
  color: white;
  background-color: #fc9b8a;
  width: 100%;
}
/*中部内容*/
.center {
  width: 100%;
  height: 1165px;
}
/*脚部*/
.footer {
  width: 100%;
}

.footer ul {
  width: 70px;
  height: 70px;
  margin-top: 122px;
}

.footer ul li {
  font-size: 16px;
  list-style: none;
}

.footer ul li a {
  color: #838288;
}

.footer .p1 {
  color: #838288;
  font-size: 16px;
  margin-top: 156px;
}

.footer .gz {
  font-size: 16px;
  margin-top: 122px;
}

.footer .gz .we {
  text-indent: 1em;
  margin-top: 30px;
}

.footer .img3 {
  margin-top: 100px;
}
</style>