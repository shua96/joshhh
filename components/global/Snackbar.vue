<template>
<v-snackbar
  v-model="snack"
  top right
  :color="color"
  :timeout="timeout"
    >
      {{ msg }}
      <v-btn
        outline
        text
        @click="snack = false"
      >
        Close
      </v-btn>
</v-snackbar>
</template>

<script>
  export default {
    props: {
      message: String,
      color: String,
      snackbar: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      timeout: 10000,
      snack: false,
      msg: ''
    }),
    watch: {
      message () {
        this.msg = this.message
      },
      snackbar () {
        this.snack = this.snackbar
      }
    }
  }
</script>
