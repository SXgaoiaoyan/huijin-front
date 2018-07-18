<template>
	<div class="layout">
		<Layout>
			<!--侧边栏-->
			<Sider class="sider" hide-trigger style="width:150px;min-width:150px;max-width:150px;flex:0 0 150px">
				<div class="side">
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
										<router-link to="/personaldata">个人资料</router-link>
									</li>
									<li>
										<a href="">我的酒窖</a>
									</li>
									<li>
										<router-link to="/allorders">全部订单</router-link>
									</li>
									<li>
										<router-link to="/personal">我的主页</router-link>
									</li>
									<li>
										<a href="">我的账户</a>
									</li>
									<li>
										<router-link to="/shopcart">我的购物车</router-link>
									</li>
									<li>
										<a href="">退出/切换</a>
									</li>
								</ul>
							</i-col>
							<i-col span="6"></i-col>
						</Row>
					</div>
				</div>
			</Sider>

			<Layout>
				<!--头部-->
				<div class="header">
					<Row>
						<i-col span="3" style="margin-left:32px">
							<img src="../static.huijinjiu.com/personal/LOGO.png" class="logo" />
						</i-col>
						<i-col span="13" offset="3">
							<ul>
								<i-col span="6">
									<li>
										<router-link to="/">商城首页</router-link>
									</li>
								</i-col>
								<i-col span="6">
									<li>
										<a href="">最新资讯</a>
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
						<i-col span="5">&nbsp;</i-col>
					</Row>
				</div>
				<keep-alive :include="cachePage">
					<router-view></router-view>
				</keep-alive>

			</Layout>
		</Layout>
	</div>
</template>
<script>
export default {
  mounted() {
    this.ajax
      .get("/api/userinfo")
      .then(response => {
        data.user = response.data.user;
        self.$store.commit("login", data);
      })
      .catch(error => {});
  },
  methods: {}
};
</script>
<style scoped>
.ivu-layout {
  width: 100%;
  background: url(http://static.huijinjiu.com/personalBj.jpg) no-repeat;
  background-size: 100% 100%;
  font-size: 16px;
}

/*侧边栏*/
.sider {
  height: 1584px;
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
  margin-top: 51px;
  font-size: 12px;
}
.sider ul li a {
  font-weight: bold;
  color: #000000;
}

/*头部*/
.header {
  width: 100%;
  height: 120px;
  box-shadow: 0 5px 5px #b5b5b5;
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
/*中部内容*/
.content {
  height: 300px;
  margin-top: 12px;
}

.content .zt {
  width: 100%;
  height: 300px;
  background: url(http://static.huijinjiu.com/theme.png) no-repeat;
  background-size: 100% 300px;
  float: left;
  font-size: 20px;
  color: #000000;
}
.content .eg {
  margin-top: 116px;
  font-size: 19px;
}
.content .cn {
  font-size: 17px;
}
.content .fx {
  width: 80px;
  height: 80px;
  background: url(../static.huijinjiu.com/personal/share.png) no-repeat center;
  background-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 60px;
  border: none;
  outline: none;
}
/*脚部*/
.footer {
  background: white;
  height: 1131px;
  margin-left: 32px;
}
.footer .img1 {
  /*width: 100%;*/
  margin-top: -70px;
  /*height: 140px;*/
  box-shadow: 0 5px 5px #b5b5b5;
}
.footer .name {
  font-size: 19px;
  color: #000000;
  margin-top: 56px;
}
.footer .user {
  font-weight: bold;
}
.footer .sex,
.footer .address {
  margin-top: 44px;
  color: #000000;
}
.footer .xd {
  margin-top: 98px;
  color: #000000;
  font-size: 19px;
}

.footer .share {
  font-size: 17px;
  color: #000000;
}
.footer .stage {
  color: #000000;
}
.footer .imgTotal1 {
  margin-top: 59px;
  width: 100%;
  height: 230px;
  box-shadow: 0 5px 5px #b5b5b5;
}
.footer .imgTotal2 {
  margin-top: 26px;
  width: 100%;
  height: 230px;
  box-shadow: 0 0 5px #b5b5b5;
}

.wrap {
  white-space: nowrap;
}
@media only screen and (min-width: 1366px) and (max-width: 1920px) {
  .eg {
    letter-spacing: 3px;
  }
  .footer .xd {
    letter-spacing: 3px;
  }
  .introduce {
    letter-spacing: 5px;
  }
}
</style>
