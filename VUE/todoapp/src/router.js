import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


export default new VueRouter({
  mode:'history',
  base:'',
  routes:[
    {
      path:'/',
      name:'home',
      component:()=>import('../src/components/Home/Home')
    }
  ]
})