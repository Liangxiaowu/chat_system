import Vue from 'vue'
import VueRouter from 'vue-router' 
import Login from  '../view/login'
import Chat  from '../view/chat'
import Content from "../components/Content";

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
      children:[
          {
              path: '/chat/:user',
              name: 'Content',
              component: Content
          }
      ]

    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router