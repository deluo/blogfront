<template>
  <div class="hello">
    <section :span="8" v-for="blog in blogList" :key="blog._id">
      <article class="post-entry">
          <header class="post-header">
              <h3 class="post-title"><a href="#">{{blog.title}}</a></h3>
              <p>@ {{blog.author}} {{blog.createTime | formatDate}}</p>
          </header>
          <p class="post-summary">{{blog.content}}</p>
          <footer class="post-footer">
              <router-link :to="{name:'BlogDetail',params:{id:blog._id}}"  class="read-more">阅读全文</router-link>
          </footer>
      </article>
    </section>
  </div>
</template>

<script>
import config from '../../config/config'
import moment from 'moment'
export default {
  name: 'blogList',
  data () {
    return {
      blogList:''
    }
  },
  created(){
      this.$http.get(config.url+'/blogs/all').then((res)=>{this.blogList =res.data}).catch((err)=>{console.log("报错"+err)})
  },
  filters:{
      formatDate(item){
          return moment(item).format('LLL');
      }
  },
  watch:{
      '$route'(to,from){
          if(this.$route.params.date){
              this.$http.get(config.url+'/blogs/getListByDate/'+this.$route.params.date).then((res)=>{this.blogList = res.data})
          }
          else if(this.$route.params.tag){
              this.$http.get(config.url+'/blogs/getListByTag',{params:{tags:this.$route.params.tag}}).then((res)=>{this.blogList = res.data})
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .post-entry{
    position: relative;
    line-height: 1.8;
    border-top: 1px solid transparent;
  }
  .post-header{
      margin-bottom:2.5rem;
      font-size:2rem;line-height:1.5;font-weight:700;margin-top:1.5rem;margin-bottom:0.5rem;
      font-size:.8rem;letter-spacing:1px;margin-top:0.5rem;margin-bottom:1rem;text-transform:uppercase;
      text-align:left
  }
  .post-title{
      margin-top:1.5rem;margin-bottom:0.5rem;font-size:1.3rem;line-height:1.3;font-weight:700;
      font-size:2rem;line-height:1.5;
  }
  .post-title a{opacity:1}
  .post-summary{
      margin-top:1rem;margin-bottom:1rem;font-size:0.9rem;text-align:justify;opacity:0.7
  }
  .post-footer{
      text-align: left;
  }
  .read-more{
      font-size:.8rem;letter-spacing:1px;text-transform:uppercase;
  }
  a:hover{color:#242424;opacity:1;outline:none}
</style>
