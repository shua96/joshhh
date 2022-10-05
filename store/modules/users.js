// import { postApi, patchApi } from '~/plugins/http'

const initialState = () => {
  return {
    user: {}
  }
}

const state = () => {
  return initialState()
}

const mutations = {
  SET_USER (state, payload) {
    state.user = payload
  },
  RESET_USER_STATE (state) {
    /*
      FUNCTION:
      RESET TO INITIAL STATE. YOU WILL APPRECIATE THIS FUNCTIONALITY
      WHEN YOU ALREADY DEALING WITH COOKIE / LOCAL STORAGE
    */
    Object.assign(state, initialState())
  }
}

const getters = {
  user: state => state.user
}

const actions = {

}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}
