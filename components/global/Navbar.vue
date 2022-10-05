<template>
  <v-navigation-drawer
    v-model="navs"
    app
    fixed
    clipped
    class="navbar-bg"
    :mini-variant.sync="mini"
    >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <!-- <img :src="crms.logo"> -->
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="white--text">Payroll V2</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
              class="white--text"
            >
              <v-icon class="white--text">chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <div class="w-100" style="display: flex; justify-content: center;" v-if="mini">
      <v-btn
        class="pa-0 ma-0 mb-3 white--text"
        small
        style="width: 30px; height: 30px;"
        color="mainColor"
        @click.stop="mini = !mini"
        fab
      >
      <v-icon v-if="mini" class="white--text">chevron_right</v-icon>
      <v-icon v-else class="white--text">chevron_left</v-icon>
    </v-btn>
    </div>
    <hr class="mx-3 mb-4"  style="z-index: 1 !important; position: relative;">
    <v-list
      dense
      class="scroll-y scroll customnavs"
      >
      <div :class="customHeight">
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
            >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                  {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
            ></v-divider>
          <v-list-tile
            v-else-if="!isUndefined(item.items)"
            :key="i"
            @click="goTo(item.goTo)"
            class="py-1 pointer"
            :class="wawexx(item)"
            >
            <v-list-tile-action>
              <v-icon class="white--text">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="white--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-group
            v-else
            :key="item.text"
            :value="false"
            class="iconClass"
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon class="white--text">{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title class="white--text">
                    {{ item.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="(list, i) in item.items"
              :key="i"
              @click="goTo(list.goTo)"
              class="py-1 pointer ml-3 white--text"
              :class="wawexx(list)"
              style="color: white;"
              >
              <v-list-tile-action>
                <v-icon dark>{{ list.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title class="white--text" v-if="list.badge === true">
                  <v-badge right class="navbar-badge" :color="list.badgeColor">
                    <template v-slot:badge v-if="list.count > 0">
                      <span>{{list.count}}</span>
                    </template>
                    <span>{{ list.text }}</span>
                  </v-badge>
                </v-list-tile-title>
                <v-list-tile-title class="white--text" v-else>
                  {{ list.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </template>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import Global from '~/plugins/mixins/global'
import { mapMutations, mapGetters } from 'vuex'

export default {
  data: () => ({
    mini: false,
    drawer: null,
    loading: false,
    navs: true,
    loginuser: { profile: {} }
  }),
  props: {
    items: Array,
    preventive: Array,
    preventiveText: String
  },
  mixins: [Global],
  computed: {
    ...mapGetters('storeevents', ['nav', 'dynamicToolbarName']),
    ...mapGetters('users', ['user']),
    customHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'customHeightMD'
        case 'sm':
          return 'customHeightMD'
        case 'md':
          return 'customHeightMD'
        default:
          return 'customHeightLG'
      }
    }
  },
  watch: {
    nav () {
      // force true due to v-navigation-drawer has no feature that tracks outside click
      if (this.nav === true) {
        this.navs = true
      } else {
        this.navs = true
      }
    }
    // 'user': {
    //   handler () {
    //     this.setLoginuser()
    //   },
    //   deep: true
    // }
  },
  methods: {
    ...mapMutations('storeevents', ['SET_NAV']),
    wawexx (payload) {
      if (this.$nuxt._route.fullPath === payload.goTo) {
        return 'active-route'
      } else {
        return ''
      }
    },
    clickable () {
      this.SET_NAV(!this.nav)
    },
    setLoginuser () {
      // this.loginuser = Object.assign({}, this.loginuser, this.user.user)
    }
  },
  mounted () {
    // this.setLoginuser()
  }
}
</script>

<style lang="stylus">
.customHeightMD
  height: 70vh !important
.customHeightLG
  height: 80vh !important

.iconClass
  color: white !important

.theme--light.v-list
  background: transparent !important
</style>
