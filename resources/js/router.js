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
      component: () => import('./components/MainContent.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('./components/Rules.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/culture',
      name: 'culture',
      component: () => import('./components/Culture.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/proposal',
      name: 'proposal',
      component: () => import('./components/Proposal.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/shareExperience',
      name: 'shareExperience',
      component: () => import('./components/ShareExperience.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/questioning',
      name: 'questioning',
      component: () => import('./components/Questioning.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./components/Profile.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('./components/Shop.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/LoginLayout.vue'),
      meta: {layout: 'login'},
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('./views/Logout.vue'),
      meta: { requiresAuth: true, layout: 'main' }
    },
  ]
});

router.beforeEach((to, from, next) => {

    // check if the route requires authentication and user is not logged in
    if (to.matched.some(route => route.meta.requiresAuth) && !localStorage.getItem('isLoggedIn')) {
        // redirect to login page
        alert('Необходимо войти в систему!')
        next({ name: 'login' })
        return
    }

    next()
});

export default router