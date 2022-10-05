<template>
  <v-toolbar 
    class="elevation-0 toolbar"
    color="#EEEEEE"
    app
    clipped-right>
      <v-icon 
        @click='clickable' 
        class="mr-3 hidden-lg-and-up"
        >dehaze
      </v-icon>
      <span class="title" v-if="$vuetify.breakpoint.mdAndUp">
        <span class="font-weight-light">{{ dynamicToolbarName }}</span>
      </span>
      <span v-if="$vuetify.breakpoint.smAndDown">
        <span class="font-weight-light">{{ dynamicToolbarName }}</span>
      </span>
      <v-spacer></v-spacer>

      <v-menu offset-y :close-on-content-click="false" v-model="customMenu">
        <template v-slot:activator="{ on }">
          <v-btn class="toolbar-btn" flat icon dark v-on="on">
            <div class="mr-2 toolbar-btn-text">
              <strong class="black--text">Hi Admin</strong>
            </div>
            <v-avatar color="mainColor" size="30" >
              <v-icon small>person</v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-card class="pa-4 logout-card">
          <v-flex class="flex-column">
            <div class="d-flex-row-center">
              <v-avatar color="mainColor" size="100">
                <v-img aspect-ratio="1" class="center-alignment">
                  <v-icon large dark>person</v-icon>
                </v-img>
              </v-avatar>
            </div>
            <v-flex ma-2 mb-3 text-center>
              <span class="subheading text-bold">infosoft@admin</span>
            </v-flex>
            <div class="mx-2">
              <v-btn depressed block color="mainColor" dark @click="logoutClick()">Log out</v-btn>
            </div>
          </v-flex>
        </v-card>
     </v-menu>

  </v-toolbar>
</template>

<script>
import Global from '~/plugins/mixins/global'
import { mapMutations } from 'vuex'

export default {
  props: {
    users: Object,
    choices: Array
  },
  data: () => ({
    count: 0,
    model: 1,
    getUser: {},
    form: {},
    show1: false,
    show2: false,
    customMenu: false,
    loginuser: { profile: {} }
  }),
  mixins: [Global, Error],
  watch: {
    // 'user': {
    //   handler () {
    //     this.setUser()
    //   },
    //   deep: true
    // }
  },
  computed: {
    // ...mapGetters('storeevents', ['nav', 'dynamicToolbarName']),
    // ...mapGetters('user', ['user'])
  },
  created () {
    // this.setUser()
  },
  methods: {
    ...mapMutations('storeevents', ['SET_NAV']),
    ...mapMutations('users', ['RESET_USER_STATE']),
    clickable () {
      this.SET_NAV(!this.nav)
    },
    logoutClick () {
      this.RESET_USER_STATE()
      this.goTo('/')
    },
    setUser () {
      // if (!_.isUndefined(this.user)) {
      //   this.loginuser = Object.assign({}, this.loginuser, this.user.user)
      // }
    }
  }
}
</script>

<style lang="stylus">
  .pic-update
    background: rgba(0,0,0,0.8) !important
    position: absolute !important
    color: white !important
    bottom: 0 !important
    width: 100% !important
    font-size: 10px !important
  .changepass
    position: absolute !important
    z-index: 1 !important
    width: 100%
    height: 100%
</style>
