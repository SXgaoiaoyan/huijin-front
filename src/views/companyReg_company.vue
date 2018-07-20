<template>
    <div>
        <Card style="width:430px;margin-left:auto;margin-right:auto;" >
            <img src="../static.huijinjiu.com/companyReg/company.png" />
            <Form >
                <FormItem>
                    <div style="font-size:15px;float:left">公司名称:</div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px">
                    </Input>
                </FormItem>

                <FormItem>
                    <div style="float:left;font-size:15px">
                        公司所在地: &nbsp;&nbsp;
                    </div>
                    <al-selector v-model="resArr" level="2" style="width:300px;float:left"/>
                </FormItem>

                <FormItem>
                    <div style="font-size:15px;float:left">公司详细地址:</div>
                     <Input type="text" style="width:298px">
                    </Input>
                </FormItem>

                <FormItem>
                    <div style="float:left;font-size:15px">
                    上传营业执照:&nbsp;
                    </div>
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                    <!-- <Button>浏览</Button>  -->
                         <Button style="margin-left:10px">上传</Button>
                    </Upload>
                    </Input>
                </FormItem>
                 <FormItem>
                    <div style="float:left;;font-size:15px">
                    上传商标注册证:
                    </div>
                    <Upload action="//jsonplaceholder.typicode.com/posts/"> 
                    <!-- <Button>浏览</Button>  -->
                         <Button>上传</Button>
                    </Upload>
                    </Input>
                </FormItem>

                <FormItem>
                    <div style="float:left;;font-size:15px">
                    公司人数:
                    </div>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px">
                    </Input>
                </FormItem>
                <FormItem>
                    <div style="float:left;;font-size:15px">
                    公司行业:
                    </div>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px">
                    </Input>
                </FormItem>  
                <FormItem>
                     <div style="float:left;;font-size:15px">
                        公司性质:
                    </div>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px">
                    </Input>
                </FormItem>
                <FormItem>
                    <div style="float:left;;font-size:15px">
                        公司营业额:
                    </div>
                    &nbsp;&nbsp;
                     <Input type="text" style="width:300px">
                    </Input>
                </FormItem>
                <FormItem>
                    <div style="float:left;;font-size:15px">
                        联系人姓名:&nbsp;&nbsp;
                    </div>
                        
                    <Input type="text" style="width:300px">
                    </Input>
                </FormItem> 
                <FormItem>
                     <div style="float:left;;font-size:15px">
                    所在部门:
                    </div>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px">
                    </Input>
                </FormItem> 
                <FormItem>
                    <div style="float:left;;font-size:15px">
                    验证手机:
                    </div>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input type="text" style="width:300px">
                    </Input>
                </FormItem> 
                <FormItem>
                   <Button style="width:300px;margin-left:88px">立即验证</Button>
                </FormItem>
                 <FormItem>
                    <Checkbox >
                        我已阅读并同意<a> <<喜马拉雅用户注册协议和隐私条款>> </a>
                    </Checkbox>
                    <Button class='login'>
                        立即注册
                    </Button>
                </FormItem> 
            </Form>
        </Card>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            resArr:[]
        }
    }
}
</script>

<style scoped>
.content .login {
  width: 100%;
  height: 40px;
  border: 1px solid #ff3430;
  outline: none;
  background-color: #fe706e;
  font-size: 19px;
  color: white;
  margin-top: 15px;
  letter-spacing: 10px;
}
</style>
