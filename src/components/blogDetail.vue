<template>
  <div>
    <h3>详情内容在这</h3>
  </div>
</template>

<script>
export default {
  name: 'blogDetail',
  created(){
      console.log(this.$route.path+"/"+this.$route.params.id);
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
