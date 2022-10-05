import { wrapFunctional } from './utils'

export { default as Men } from '../..\\components\\men.vue'
export { default as Stef } from '../..\\components\\stef.vue'

export const LazyMen = import('../..\\components\\men.vue' /* webpackChunkName: "components/men" */).then(c => wrapFunctional(c.default || c))
export const LazyStef = import('../..\\components\\stef.vue' /* webpackChunkName: "components/stef" */).then(c => wrapFunctional(c.default || c))
