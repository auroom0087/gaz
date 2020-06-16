import Vue from 'vue'
import store from './store'
import Router from 'vue-router'

Vue.use(Router);
const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: () => import('./components/MainContent.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('./components/Rules.vue')
    },
    {
      path: '/culture',
      name: 'culture',
      component: () => import('./components/Culture.vue')
    },
    {
      path: '/proposal',
      name: 'proposal',
      component: () => import('./components/Proposal.vue')
    },
    {
      path: '/shareExperience',
      name: 'shareExperience',
      component: () => import('./components/ShareExperience.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./components/Profile.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
  ]
});

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