<template>
    <div>
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
            <!--价格-->
            <Row>
              <i-col span="12" offset="3">
                <div class="money">
                  ¥20000.00
                  <!-- <span style="font-size: 28px;">{{price}}</span> -->
                </div>
                <!-- <i-col span="11">&nbsp;</i-col> -->
              </i-col>
            </Row>

             <Row> 
               <i-col span="6" offset="6"> 
                <Button class="buy" >立即购买</Button>
               </i-col>
              <!-- <i-col span="6" offset="5">
                <Button class="addcart" @click="addcart_m">加入购物车</Button>
              </i-col> -->
            </Row>
          </div>
        </i-col>

        <i-col span="14">
          <!-- <img :src="img" class="img1" /> -->
          <img src="http://static.huijinjiu.com/banner.png" class="img1">
        </i-col>
        <i-col span="1">&nbsp;</i-col>
      </Row>
    </div>
    <!-- 中部 -->
    <Row>
        <i-col span="22" offset="1" style="margin-top:70px">
            <Card style="height:624px">
                <div style="width:300px;height:20px;margin-left:auto;margin-right:auto;margin-top:60px">
                    <div style="width:100px;height:4px;background:#5bb4ff;float:left;"></div>
                     <div style="float:left;font-size:16px;margin-top:-10px;margin-left:14px">产品详情</div>
                    <div style="width:100px;height:4px;background:#5bb4ff;float:left;margin-left:14px"></div>
                </div>
                
                <div style="width:1200px;margin-top:70px;margin-left:auto;margin-right:auto">
                   <div style="width:550px;float:left">
                        <Carousel autoplay  :autoplay-speed="1500" v-model="value" loop>
                            <CarouselItem>
                                <div class="demo-carousel" style="background:#5bb4ff;">
                                    1
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div class="demo-carousel" style="background:red;">2</div>
                            </CarouselItem>
                            <CarouselItem>
                                <div class="demo-carousel" style="background:blue;">3</div>
                            </CarouselItem>
                            <CarouselItem>
                                <div class="demo-carousel" style="background:green;">4</div>
                            </CarouselItem>
                        </Carousel>
                   </div> 
                   <div style="font-size:16px;width:400px;float:left;margin-left:100px;line-height:40px">
                       酒品名称: &nbsp;汇金酒<Br />
                       产品规格: &nbsp;1吨<Br />
                       产品类型: &nbsp;汇金收藏酒<Br />
                       生产日期: &nbsp;2007年10月1号<Br />
                       产品浓度: &nbsp;50%<Br />
                       存储日期: &nbsp;10年<Br />
                       卖家介绍: &nbsp;此酒已经收藏近10年,长期放在酒窖中,酒的醇香是谁也想不到的!
                   </div>
                </div>

            </Card>
        </i-col>
    </Row>

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
            value:0
        }
    }
};
</script>

<style scoped>
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
.content .buy {
  border-radius: 0;
  height: 36px;
  color: white;
  background-color: #fc9b8a;
  width: 100%;
  margin-top: 60px;
}
.demo-carousel{
    height:390px;
    text-align:center;
    line-height:390px
}
.footer{
		width: 100%;
		height: 248px;
		margin-top: 50px;
	}
	.footer ul{
		width: 70px;
		height: 70px;
		margin-top: 122px;
	}
	.footer ul li{
		font-size: 16px;
		list-style: none;
	}
	.footer  ul li a{
		color: #838288;
	}
	.footer .p1{
		color: #838288;
		font-size: 16px;
		margin-top: 156px;
	}
	.footer .gz{
		font-size: 16px;
		margin-top: 122px;
	}
	.footer .gz .we{
		text-indent: 1em;
		margin-top: 30px;
	}
	.footer .img3{
		margin-top: 100px;
		
	}
</style>
