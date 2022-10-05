const initialState = () => {
  return {
    nav: false,
    dynamicToolbarName: '',
    locationFilterTogle: false
  }
}
const state = initialState()

const mutations = {
  SET_NAV (state, payload) {
    state.nav = payload
  },
  SET_DYNAMIC_TOOLBAR_NAME (state, payload) {
    state.dynamicToolbarName = payload
  },
  SET_FILTER_TOGGLE (state, payload) {
    state.locationFilterTogle = payload
  },
  RESET_STOREEVENTS_STATE (state) {
    /*
      FUNCTION:
      RESET TO INITIAL STATE. YOU WILL APPRECIATE THIS FUNCTIONALITY
      WHEN YOU ALREADY DEALING WITH COOKIE / LOCAL STORAGE
    */
    Object.assign(state, initialState())
  }
}

const getters = {
  nav: state => state.nav,
  dynamicToolbarName: state => state.dynamicToolbarName,
  locationFilterTogle: state => state.locationFilterTogle
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
