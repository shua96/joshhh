import Vue from 'vue'
import Vuex from 'vuex'

import storeevents from './modules/storeevents'
import users from './modules/users'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    modules: {
      storeevents,
      users
    }
  })
}

export default store
