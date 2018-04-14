<template>
    <el-container style="height: 100%; solid #eee">
        <el-aside>
            <el-menu default-active="" class="el-menu-vertical-demo" :collapse="isCollapse" 
            text-color="#fff" active-text-color="#ffd04b" background-color="#545c64" unique-opened=true
            >
                <el-menu-item index="1" v-model="isCollapse" @click="handleSlider">
                    <i class="el-icon-more"></i>
                    <span slot="title" v-if="isCollapse">展开</span>
                    <span slot="title" v-else>收起</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span slot="title">归档</span>
                    </template>
                    <el-menu-item-group v-for="(sbd,index) in sortByDate" :key="sbd._id | dateFormat">
                        <el-menu-item :index="'2'+'-'+index" @click="clickDate(sbd._id)" >{{sbd._id | dateFormat}}<span class="num-box">{{sbd.blogCount}}</span></el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span slot="title">分类</span>
                    </template>
                    <el-menu-item-group v-for="(sbt,index) in sortByTags" :key="sbt._id">
                        <el-menu-item :index="'3'+'-'+index" @click="clickTag(sbt._id)">{{sbt._id}}<span class="num-box">{{sbt.blogCount}}</span></el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="4">
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
  .num-box{
    position: absolute;
    right: 1pc;
    top: 9pt;
    display: inline-block;
    min-width: 24px;
    height: 24px;
    line-height: 24px;
    padding: 0 3px;
    font-size: 10px;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    background: #607d8b;
    color: #fff;
    text-shadow: 1px 1px 3px #444;
  }
  .el-aside{
    min-width: 22px !important;
    width: 220px !important;
    border-radius: 4px !important;
    background-color: #fff !important;
  }
</style>

<script>
import config from '../../config/config'
import moment from 'moment'
  export default {
    data() {
      return {
        isCollapse: true,
        sortByDate:'',
        sortByTags:'',
        currentDate: new Date()
      };
    },
    created(){
        //console.log(config.url)
        this.$http.get(config.url+'/blogs/groupByTags').then((res)=>{this.sortByTags = res.data});
        this.$http.get(config.url+'/blogs/groupByDate').then((res)=>{this.sortByDate = res.data});
    },
    methods: {
      handleSlider(){
          this.isCollapse = !this.isCollapse;
      },
      clickTag(tag){
          this.$router.push({name:'BlogListByTag',params:{tag:tag}});
      },
      clickDate(date){
          this.$router.push({name:'BlogListByDate',params:{date:date.year+'-'+date.month}});
      }
    },
    filters:{
        dateFormat(item){
            return moment(item.year+'-'+item.month).format('MMM YYYY');
        }
    }
  }
</script>
