<template>
    <div>
        <!--中部内容-->
        <div class="content">
            <Row>
                <!--主题图-->
                <i-col span="20" style="margin-left:32px">
                    <div class="zt">
                        <!--个人主页的英文-->
                        <div class="eg">
                            <Row>
                                <i-col span="6" offset="10" class="wrap">
                                    PERSONAL HOMEPAGE
                                </i-col>
                                <i-col span="8">&nbsp;</i-col>
                            </Row>
                        </div>
                        <!--个人主页的中文-->
                        <div class="cn">
                            <Row>
                                <i-col span="3" offset="11">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;个人主页
                                </i-col>
                                <i-col span="10">&nbsp;</i-col>
                            </Row>
                        </div>
                    </div>
                </i-col>
                <!--分享按钮-->
                <i-col span="2">
                    <button type="button" class="fx"></button>
                </i-col>
                <i-col span="2">&nbsp;</i-col>
            </Row>
        </div>

        <!--脚部-->
        <!--<Row>-->
        <i-col span="20" class="footer">
            <!--头像图片-->
            <Row>
                <i-col span="3" offset="11">
                    <img :src="user.userinfo.qq_user.figureurl_qq_2" class="img1" />
                </i-col>
                <i-col span="10"></i-col>
            </Row>

            <!--name-->
            <Row>
                <i-col span="2" offset="11">
                    <div class="name">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NAME
                    </div>
                </i-col>
                <i-col span="11">
                    &nbsp;
                </i-col>
            </Row>
            <!--用户名-->
            <Row>
                <i-col span="3" offset="11" class="wrap">
                    <div class="user">
                        &nbsp;&nbsp;&nbsp;{{user.userinfo.name}}
                    </div>
                </i-col>
                <i-col span="10">
                    &nbsp;
                </i-col>
            </Row>
            <!--性别和地址-->
            <Row>
                <i-col span="5" offset="10">
                    <Row>
                        <i-col span="6">
                            <div class="sex">
                                <img src="../static.huijinjiu.com/personal/male.png" style="vertical-align: middle;" />&nbsp;{{user.userinfo.qq_user.gender}}
                            </div>
                        </i-col>

                        <i-col span="7" offset="11">
                            <div class="address">
                                <img src="../static.huijinjiu.com/personal/address.png" style="vertical-align: middle;" />&nbsp;{{user.userinfo.qq_user.city}}
                            </div>
                        </i-col>
                    </Row>
                </i-col>

                <i-col span="9">&nbsp;</i-col>
            </Row>
            <!--分享心得的英文-->
            <Row>
                <i-col span="6" offset="10">
                    <div class="xd">
                        SHARE EXPERIENCE
                    </div>
                </i-col>
                <i-col span="8">&nbsp;</i-col>
            </Row>
            <!--分享心得-->
            <Row>
                <i-col span="6" offset="10">
                    <Row>
                        <i-col span="6">
                            <img src="../static.huijinjiu.com/personal/blue.png" style="vertical-align: middle;" />
                        </i-col>
                        <i-col span="8">
                            <div class="share">
                                分享心得
                            </div>
                        </i-col>
                        <i-col span="6">
                            <img src="../static.huijinjiu.com/personal/blue.png" style="vertical-align: middle;" />
                        </i-col>
                        <i-col span="4">&nbsp;</i-col>
                    </Row>
                </i-col>
                <i-col span="8">&nbsp;</i-col>
            </Row>
            <!--介绍-->
            <Row>
                <div class="introduce">
                    <i-col span="3" offset="11" style="margin-top: 52px;" class="wrap">
                        绵,而如缕不绝。
                    </i-col>
                    <i-col span="10">&nbsp;</i-col>

                    <i-col span="17" offset="5" class="wrap">
                        江苏古称吴国,有东南形胜之美,自唐宋之后,文脉昌盛,商旅繁盛。耕读之家,以时代相续为要
                    </i-col>
                    <i-col span="2">&nbsp;</i-col>

                    <i-col span="17" offset="5" class="wrap">
                        ,商业人士,以诚信经营为本。不求爆发,不失其所,因为长久的价值,远胜于速成。一方物产乃
                    </i-col>
                    <i-col span="2">&nbsp;</i-col>

                    <i-col span="6" offset="9" class="wrap">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;至习俗人情,都源于一方水土。
                    </i-col>
                    <i-col span="9">&nbsp;</i-col>
                </div>
            </Row>
            <!--底部图片-->
            <Row>
                <i-col span="10" offset="1">
                    <img src="../static.huijinjiu.com/personal/wine.png" class="imgTotal1" />
                </i-col>
                <i-col span="10" offset="2">
                    <img src="../static.huijinjiu.com/personal/wine.png" class="imgTotal1" />
                </i-col>
                <i-col span="1">&nbsp;</i-col>

                <i-col span="10" offset="1">
                    <img src="../static.huijinjiu.com/personal/wine.png" class="imgTotal2" />
                </i-col>
                <i-col span="10" offset="2">
                    <img src="../static.huijinjiu.com/personal/wine.png" class="imgTotal2" />
                </i-col>
                <i-col span="1">&nbsp;</i-col>
            </Row>

        </i-col>
        <i-col span="4">&nbsp;</i-col>
        <!--</Row>-->
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"])
  },
};
</script>
