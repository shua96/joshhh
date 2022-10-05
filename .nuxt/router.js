import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _48729f1f = () => interopDefault(import('..\\pages\\best.vue' /* webpackChunkName: "pages/best" */))
const _24c34483 = () => interopDefault(import('..\\pages\\best\\index.vue' /* webpackChunkName: "pages/best/index" */))
const _d3707266 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _7630bd15 = () => interopDefault(import('..\\pages\\test\\index.vue' /* webpackChunkName: "pages/test/index" */))
const _4b86ce27 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4d14c70a = () => interopDefault(import('..\\pages\\index\\index.vue' /* webpackChunkName: "pages/index/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/best",
    component: _48729f1f,
    children: [{
      path: "",
      component: _24c34483,
      name: "best"
    }]
  }, {
    path: "/test",
    component: _d3707266,
    children: [{
      path: "",
      component: _7630bd15,
      name: "test"
    }]
  }, {
    path: "/",
    component: _4b86ce27,
    children: [{
      path: "",
      component: _4d14c70a,
      name: "index"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
