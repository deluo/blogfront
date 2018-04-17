<template>
  <div>
    <h3 class="post-title" v-html="blog.title"></h3>
    <p v-html="blog.content"></p>
  </div>
</template>

<script>
import config from '../../config/config'
import marked from 'marked'
export default {
  name: 'blogDetail',
  created(){
    this.$http.get(config.url+'/blogs/getOne/'+this.$route.params.id).then((res)=>{console.log(res);this.blog =res.data}).catch((err)=>{console.log("报错"+err)})
    //console.log(this.$route.path+"/"+this.$route.params.id);
  },
  data () {
    return {
      blog:'',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .post-title{
      margin-top:1.5rem;margin-bottom:0.5rem;font-size:1.5rem;line-height:1.3;font-weight:700;
      line-height:1.5;
      text-align: justify;
  }
  .post-title a{opacity:0.9}
  p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    text-align: justify;
}
</style>
