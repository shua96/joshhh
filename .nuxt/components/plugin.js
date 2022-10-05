import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Men: () => import('../..\\components\\men.vue' /* webpackChunkName: "components/men" */).then(c => wrapFunctional(c.default || c)),
  Stef: () => import('../..\\components\\stef.vue' /* webpackChunkName: "components/stef" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
