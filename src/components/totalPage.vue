<template>
    <el-container style="height: 500px; solid #eee">
        <el-aside>
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
                <el-menu-item index="4" v-model="isCollapse" @click="handleSlider">
                    <i class="el-icon-more"></i>
                    <span slot="title" v-if="isCollapse">展开</span>
                    <span slot="title" v-else>收起</span>
                </el-menu-item>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span slot="title">归档</span>
                    </template>
                    <el-menu-item-group v-for="sbd in sortByDate" :key="sbd.name">
                        <el-menu-item index="1-2">{{sbd.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span slot="title">分类</span>
                    </template>
                    <el-menu-item-group v-for="sbt in sortByType" :key="sbt.name">
                        <el-menu-item index="2-2">{{sbt.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="3">
                    <i class="el-icon-share"></i>
                    <span slot="title">分享</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-main>
                <router-view>
<<<<<<< HEAD
=======
                    <!-- <section :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                        <article class="post-entry">
                            <header class="post-header">
                                <h3 class="post-title"><a href="#">标题</a></h3>
                                <p>显示日期和作者</p>
                            </header>
                            <p class="post-summary">
                                内容缩略
                            </p>
                            <footer class="post-footer">
                                <a href="#" class="read-more">阅读全文</a>
                            </footer>
                        </article>
                    </section> -->
>>>>>>> 4dc72023f73fbfacd0afa9499e404adcbec8351a
                </router-view>
            </el-main>
        </el-container>
    </el-container>
    
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
        sortByDate:[{"name":"七月2018"},{"name":"三月2018"},{"name":"九月2017"}],
        sortByType:[{"name":"随笔"},{"name":"技术"},{"name":"心情"}],
        currentDate: new Date()
      };
    },
    methods: {
      handleSlider(){
          this.isCollapse = !this.isCollapse;
          //console.log(this.isCollapse)
      }
    }
  }
</script>
