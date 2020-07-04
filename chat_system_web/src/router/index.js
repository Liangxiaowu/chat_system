import Vue from 'vue'
import VueRouter from 'vue-router' 
import Login from  '../view/login'
import Chat  from '../view/chat'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const routes = [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path:'/chat',
      name:'Chat',
      component:Chat,
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router