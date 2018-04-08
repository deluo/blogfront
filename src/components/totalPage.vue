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
                <!-- <el-row :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0" style="margin-top:10px;margin-left:10px;">
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
                </el-pagination> -->
                <section :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
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
                </section>
            </el-main>
        </el-container>
    </el-container>
    
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
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
