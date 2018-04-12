import Vue from 'vue'
import Router from 'vue-router'
import BlogList from '@/components/blogList'
import TotalPage from '@/components/totalPage'
import BlogDetail from '@/components/blogDetail'

Vue.use(Router)

const routes = [
    {
      path:'/blog',
      name:'totalPage',
      component:TotalPage,
      children:[
        {
          path: '/',
          name: 'BlogList',
          component: BlogList
        },{
          path:'tag/:tag',
          name:'BlogListByTag',
          component:BlogList
        },{
          path:'blogdetail',
          name:'BlogDetail',
          component:BlogDetail
        }
      ]
    }
]

export default routes
