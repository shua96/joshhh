import { mapMutations } from 'vuex'
import _ from 'lodash'

export default {
  data: () => ({
    mobilenumberRules: [
      (v) =>
        (v && v.length === 11) ||
        'Mobile Number must be 11 digits'
    ]
  }),
  methods: {
    ...mapMutations('storeevents', ['SET_DYNAMIC_TOOLBAR_NAME']),
    goTo (route) {
      this.$router.push(route)
    },
    toolBarName (payload) {
      this.SET_DYNAMIC_TOOLBAR_NAME(payload)
    },
    isUndefined (payload) {
      if (!_.isUndefined(payload)) {
        return true
      } else {
        return false
      }
    },
    isEmpty (payload) {
      if (!_.isEmpty(payload)) {
        return true
      } else {
        return false
      }
    },
    isNull (payload) {
      if (!_.isNull(payload)) {
        return true
      } else {
        return false
      }
    },
    isObject (payload) {
      if (!_.isObject(payload)) {
        return true
      } else {
        return false
      }
    },
    isNaN (payload) {
      if (!_.isNaN(payload)) {
        return true
      } else {
        return false
      }
    },
    numberSeparators (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    isFacebookApp () {
      // var ua = navigator.userAgent || navigator.vendor || window.opera
      // return (ua.indexOf('FBAN') > -1) || (ua.indexOf('FBAV') > -1)
    }
  }
}
