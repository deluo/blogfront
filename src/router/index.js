import Vue from 'vue'
import Router from 'vue-router'
import BlogList from '@/components/blogList'
import BlogHome from '@/components/blogHome'
import BlogDetail from '@/components/blogDetail'
import Login from '@/components/login'

Vue.use(Router)

const routes = [
    {
      path:'/blog',
      name:'blogHome',
      component:BlogHome,
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
          path:'date/:date',
          name:'BlogListByDate',
          component:BlogList
        }
        ,{
          path:'blogdetail/:id',
          name:'BlogDetail',
          component:BlogDetail
        }
      ]
    },
    {
      path:'/admin',
      name:'blogAdmin',
      component:Login
    }
]

export default routes
