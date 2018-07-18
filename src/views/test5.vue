<template>
    <Upload :action="apiurl+'/api/upload'" :headers="headers" name="image">
        <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
</template>
<script>
import Cookies from 'js-cookie';
export default {
  data() {
    return {
      headers:{},
      apiurl:APIURL
    };
  },
  mounted() {
    this.headers={
        Authorization:`Bearer ${Cookies.get('token')}`,
        Accept:'application/vnd.huijin.v1+json'
    };
  },
};
</script>