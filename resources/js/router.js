import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

// export default new Router({
//   mode: 'hash',
//   base: process.env.BASE_URL,
  
// });

// import Vue from 'vue'
// import Router from 'vue-router'

import store from './store'

// Vue.use(Router);

// const router = new Router({
//   mode: 'hash',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'mainContent',
//       component: () => import('./components/ExampleComponent.vue')
//     }
//   ]
// });

// router.beforeEach((to, from, next) => {

//     // check if the route requires authentication and user is not logged in
//     if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
//         // redirect to login page
//         alert('Необходимо войти в систему!')
//         next({ name: 'mainContent' })
//         return
//     }

//     next()
// });

export default router