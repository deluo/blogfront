<template>
  <div>
    <h3>{{blog.title}}</h3>
    <p>{{blog.content}}</p>
  </div>
</template>

<script>
import config from '../../config/config'
export default {
  name: 'blogDetail',
  created(){
    this.$http.get(config.url+'/blogs/getOne/'+this.$route.params.id).then((res)=>{this.blog =res.data}).catch((err)=>{console.log("报错"+err)})
    // console.log(this.$route.path+"/"+this.$route.params.id);
  },
  data () {
    return {
      blog:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
