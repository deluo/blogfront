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
                <el-row :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0" style="margin-top:10px;margin-left:10px;">
                    <el-col>
                        <el-card :body-style="{ padding: '0px' }">
                        <img src="../assets/hamburger.png" class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-pagination
                background
                layout="prev, pager, next"
                :total="1000" style="margin-top:20px;">
                </el-pagination>
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
        sortByType:[{"name":"事件簿"},{"name":"分享集"},{"name":"技术组"}],
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
