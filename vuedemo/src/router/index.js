import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Order from '@/page/Order'
import Test from '@/page/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/order',
      name: 'Order',
      component: Order
    },{
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
