<template>
  <div>
    <!-- <Layout> -->
      <!--侧边栏-->
      <Sider  class="sider" hide-trigger style="width:150px;min-width:150px;max-width:150px;flex:0 0 150px">
        <div>
          <Row>
            <i-col span="19" offset="2">
              <img :src="user.userinfo.qq_user.figureurl_qq_2" class="bk" />
            </i-col>
            <i-col span="3">&nbsp;</i-col>
          </Row>

          <Row>
            <i-col span="18" offset="6" class="col1">
              {{user.userinfo.name.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}}
            </i-col>
          </Row>

          <div class="bottom">
            <Row>
              <i-col span="11" offset="7">
                <ul>
                  <li>
                    <router-link to="/personaldata" style="cursor:pointer">个人资料</router-link>
                  </li>
                  <li>
                    <router-link to="/myCellar">我的酒窖</router-link>
                  </li>
                  <li>
                    <router-link to="/allorders">全部订单</router-link>
                  </li>
                  <li>
                    <router-link to="/personal">我的主页</router-link>
                  </li>
                  <li>
                    <router-link to="/myAccount">我的账户</router-link>
                  </li>
                  <li>
                    <router-link to="/shopcart">我的购物车</router-link>
                  </li>
                  <li>
                    <a href="">
                      <span @click="logout_m()">退出</span>
                    </a> /
                    <router-link to="/login">切换</router-link>
                  </li>
                </ul>
              </i-col>
              <i-col span="6"></i-col>
            </Row>
          </div>
        </div>
      </Sider>
      <!-- <Layout> -->
      
        <transition >
          <router-view></router-view>
        </transition>

      <!-- </Layout> -->
    
    <!-- </Layout> -->
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"])
  },
  mounted() {
    this.ajax
      .get("/api/userinfo")
      .then(response => {
        data.user = response.data.user;
        self.$store.commit("bindUser", data);
        console.log("bindUser");
      })
      .catch(error => {});
  },
  methods: {
    logout_m() {
      this.$store.commit("logout");
      this.$router.push({
        name: "home_content"
      });
    }
  }
};
</script>
<style scoped>


/*侧边栏*/
.sider {
  height:900px;
  background: url(../static.huijinjiu.com/personal/siderImg.png) no-repeat;
  background-size: 100% 100%;
  position:absolute;
}
.sider .bk {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  /* margin-top: 102px; */
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
  margin-top: 100px;
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
</style>


