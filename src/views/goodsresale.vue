<template>
     <div class="layout">
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
                <!-- 中部内容 -->
                <Row>
                    <i-col span="22" class="content">
                        <div style="font-size:16px;font-weight:bold;border:1px solid #b4b2b3;height:34px;line-height:34px;text-indent:1em">
                            转售商品信息
                        </div>
                        <Card style="width:600px;margin-left:150px;background:transparent;letter-spacing;1px;line-height:38px;border:none">
                            商品名称: &nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px" placeholder="商品名称不超过30个字"></Input><Br />
                            商品ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px" placeholder="请输入商品ID"></Input><Br />
                            生产日期: &nbsp;&nbsp;&nbsp;2013年1月1日 <Br />
                            产品规格: &nbsp;&nbsp;&nbsp;500ml
                            产品浓度: &nbsp;&nbsp;&nbsp;50° <Br />
                            产品类型: &nbsp;&nbsp;&nbsp;收藏版 原酒
                            产品年限: &nbsp;&nbsp;&nbsp;10年 <Br />
                            商品描述: &nbsp;&nbsp;&nbsp;<Input type="textarea" style="width:300px"></Input><Br />
                            收款方式: &nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px" placeholder="现金结算(收取服务费)"></Input> 服务说明 <a>查看说明>></a> <Br />
                            商品价格: &nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px" ></Input><Br />
                            商品图片: &nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px;letter-spacing:2px" placeholder="请上传商品的亮点图片,吸引买家更快下单."></Input><Br />
                                <!-- 图片上传 -->
                            <div class="demo-upload-list" v-for="item in uploadList">
                                <template v-if="item.status === 'finished'">
                                    <img :src="item.url">
                                    <div class="demo-upload-list-cover">
                                        <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                                        <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                                    </div>
                                </template>
                                <template v-else>
                                    <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                                </template>
                            </div>
                            <Upload
                                ref="upload"
                                :show-upload-list="false"
                                :on-success="handleSuccess"
                                :format="['jpg','jpeg','png']"
                                :max-size="2048"
                                :on-format-error="handleFormatError"
                                :on-exceeded-size="handleMaxSize"
                                :before-upload="handleBeforeUpload"
                                multiple
                                type="drag"
                                action="//jsonplaceholder.typicode.com/posts/"
                                style="display: inline-block;width:200px;height:100px;margin-left:75px">
                                <div style="width: 200px;height:100px;line-height: 100px;">
                                    <Icon type="camera" size="30" ></Icon>
                                </div>
                            </Upload>
                            <Modal title="View Image" v-model="visible">
                                <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
                            </Modal>
                        </Card>

                        <div style="font-size:16px;font-weight:bold;border:1px solid #b4b2b3;height:34px;line-height:34px;text-indent:1em">
                            卖家联系方式
                        </div>
                        <div style="margin-left:150px;margin-top:10px">
                            卖家手机号: &nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px" placeholder=""></Input><Br />
                        </div>
                        <Button style="margin-top:10px;margin-left:252px;width:120px;background:#ff2d24;color:white">发布</Button>
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
      imgName: "",
      visible: false,
      uploadList: []
    };
  },
  methods: {
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      file.url =
        "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
      file.name = "7eb99afb9d5f317c912f08b5212fd69a";
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M."
      });
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: "Up to five pictures can be uploaded."
        });
      }
      return check;
    }
  },
  mounted() {
    this.uploadList = this.$refs.upload.fileList;
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
  margin-top: 10px;
  background: url(http://static.huijinjiu.com/diwen.png) no-repeat;
  background-size: 100% 100%;
  margin-left: 32px;
  padding: 50px;
}
.demo-upload-list {
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>


