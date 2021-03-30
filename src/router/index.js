import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/pages/Login';
import Products from '@/components/pages/Products';
import CustomerOrder from '@/components/pages/CustomerOrders';
import Coupon from '@/components/pages/Coupon';
import CustomerCheckout from '@/components/pages/CustomerCheckout';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login',
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: { requiresAuth: true },
    // },
    {
      path: '/login', // 登入頁
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin', //後台
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products', // 產品頁 須驗證
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          name:'coupon', // 優惠券頁 須驗證
          path:'Coupon',
          component: Coupon,
          meta: { requiresAuth: true }
      },
      ],
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'customer_order',
          name: 'CustomerOrder',
          component: CustomerOrder,
        },
        {
          path: 'customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout,
        },
      ],
    },
  ],
});
