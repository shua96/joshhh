<template>
  <v-layout v-if="!loading">
    <no-ssr>

      <navbar 
        :items="navbar"
      />

      <toolbar
        :choices="choices"
      />

      <nuxt-child />

    </no-ssr>
  </v-layout>
</template>

<script>
  import Global from '~/plugins/mixins/global'

  export default { data: () => ({
    drawer: null,
    choices: [
      { title: 'Log out', goTo: '/logout' }
    ],
    navbar: [
      { icon: 'dashboard', text: 'Dashboard', goTo: '/dashboard' }
    ],
    loading: false,
    navs: true
  }),
  watch: {
    nav () {
      // force true due to v-navigation-drawer has no feature that tracks outside click
      if (this.nav === true) {
        this.navs = true
      } else {
        this.navs = true
      }
    }
  },
  mixins: [Global]
}
</script>
