<template>
  <div>登陆中..........</div>
</template>
<script>
import Cookies from 'js-cookie';
export default {
  data() {
    return {};
  },
  mounted() {
    var self = this;
    var token=this.$route.query.token;
    Cookies.set('token', token);
    // this.ajax.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    this.ajax
      .get("/api/userinfo")
      .then(response => {
        var data={}
        data.token=token
        data.user=response.data.user
        self.$store.commit(
          "login",
          data
        );
        self.$router.push({
          name: "home"
        });
      })
      .catch(error => {
        if (error.status_code == 403) {
          self.$Message.error(error.message);
        }
        self.$router.push({
          name: "login"
        });
      });
  }
};
</script>>