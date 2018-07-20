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
		<keep-alive>
			<transition name="slide-fade">
				<router-view></router-view>
			</transition>
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
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}
</style>


