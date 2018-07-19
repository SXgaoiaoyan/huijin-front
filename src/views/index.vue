<template>
	<div class="mall">
		<!--头部-->
		<div class="header">
			<Row>
				<i-col span="1">&nbsp;</i-col>
				<i-col span="3">
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
		<keep-alive :include="cachePage">
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
export default {
  methods: {
    home_m() {
      this.$router.push({
        name: "home_content"
      });
    },
    wineclass_m() {
      this.$router.push({
        name: "wineclass"
      });
    },
    personaldata_m() {
      this.$router.push({
        name: "personal"
      });
    }
  }
};
</script>
<style scoped>
.mall {
  width: 100%;
  background: url(http://static.huijinjiu.com/bg.png) no-repeat;
  background-size: 100% 100%;
}
.header{
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
</style>


