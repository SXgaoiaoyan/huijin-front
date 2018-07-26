<template>
	<div class="mall">
		<!--头部-->
		<div class="header">
			<Row>
				<i-col span="3" offset="1">
					<img src="http://static.huijinjiu.com/LOGO.png" class="logo" />
				</i-col>
				<i-col span="2">&nbsp;</i-col>
				<i-col span="13">
					<ul>
						<i-col span="6">
							<li>
								<router-link to="/">商城首页</router-link>
							</li>
						</i-col>
						<i-col span="6">
							<li>
								<router-link to="/news">最新资讯</router-link>
							</li>
						</i-col>
						<i-col span="6">
							<li>
								<router-link to="/wineclass">酒品分类</router-link>
							</li>
						</i-col>
						<i-col span="6">
							<li>
								<router-link to="/personal">个人中心</router-link>
							</li>
						</i-col>
					</ul>
				</i-col>
				<i-col span="5"></i-col>
			</Row>
		</div>
		<div class="content">
			<!-- 搜索框 -->
			<div class="search">

				<Input type="text" v-model="q" placeholder="输入您想搜索的商品" style="padding-top:42px;padding-left:100px;width:700px;" size="large">
				<Icon type="search" slot="append" @click.native="search"></Icon>
				</Input>
			</div>
		</div>

		<div class="goodsList">
			<!--  -->
			<div style="display: flex;flex-wrap:wrap;">
				<div style="width:258px;height:402px;background:#fcfcfc;border-radius:5px" v-for="(item,index) in list">
					<img :src="item.unique_good.goods_attr_img" style="margin-left:100px;margin-top:20px;width:100%" />
					<Br />
					<div style="text-align:center;font-size:14px;font-weight:blood;margin-top:15px">{{item.unique_good.goods_name}} 10年</div>
					<Br />
					<Br />
					<div style="text-align:center;font-size:12px">浓度50% 5000ml</div>
					<Br />
					<Br />
					<div style="text-align:center;font-size:18px;color:red">￥{{item.price}}</div>
					<Button style="width:120px;border-radius:20px;background:#f1f1f1;margin-left:70px;margin-top:20px" size="large">查看详情</Button>
				</div>
			
			</div>

		</div>

		<!--脚部-->
		<div class="footer">
			<Row>
				<i-col span="6">
					<img src="../static.huijinjiu.com/mall/lotus.png" />
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
					<img src="../static.huijinjiu.com/mall/code.png" class="img3" />
				</i-col>
				<i-col span="3">&nbsp;</i-col>

			</Row>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
			list: [],
			page:1,
			q:''

    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
			var self=this
      this.ajax
        .get("/api/uniqueGoodMartet",{ params: { page: self.page,q:self.q }})
        .then(response => {
						this.list=response.data.markets.data;
        })
        .catch(error => {});
		},
		search(){
			this.getList()
		}
  }
};
</script>

<style scoped>
.mall {
  width: 100%;
  height: 2100px;
  background: url(http://static.huijinjiu.com/bg.png) no-repeat;
  background-size: 100% 100%;
}
.header {
  width: 100%;
  height: 120px;
  box-shadow: 0 5px 8px #b5b5b5;
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

.content {
  margin-top: 24px;
}
.content .search {
  width: 100%;
  height: 120px;
  background: white;
  line-height: 120px;
  box-shadow: 0 5px 8px #b5b5b5;
}
.goodsList {
  width: 1300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
/*脚部*/
.footer {
  width: 100%;
  height: 248px;
  margin-top: 228px;
  box-shadow: 5px 0 10px #b5b5b5;
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
@media screen and (max-width: 1920px) {
  .text2 .bottom {
    font-size: 12px;
    letter-spacing: 6.8px;
  }
}
@media screen and (max-width: 1366px) {
  .text2 .bottom {
    font-size: 12px;
    letter-spacing: 1.5px;
  }
}
</style>
