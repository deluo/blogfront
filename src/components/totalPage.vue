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
                    <el-menu-item-group v-for="sbt in sortByTags" :key="sbt._id">
                        <el-menu-item index="2-2" @click="clickTag(sbt._id)">{{sbt._id}}<span>{{sbt.blogCount}}</span></el-menu-item>
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
import config from '../../config/config'
  export default {
    data() {
      return {
        isCollapse: true,
        sortByDate:[{"name":"七月2018"},{"name":"三月2018"},{"name":"九月2017"}],
        sortByTags:'',
        currentDate: new Date()
      };
    },
    created(){
        console.log(config.url)
        this.$http.get(config.url+'/blogs/groupByTags').then((res)=>{this.sortByTags = res.data});
    },
    methods: {
      handleSlider(){
          this.isCollapse = !this.isCollapse;
      },
      clickTag(tag){
          this.$router.push({name:'BlogListByTag',params:{tag:tag}});
      }
    }
  }
</script>
