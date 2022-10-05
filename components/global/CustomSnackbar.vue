<template>
  <v-chip 
    color="#1E1E1E"
    label
    text-color="white"
    style="position: fixed; right: 0; bottom: 0; z-index: 1;"
  >
    {{ `${filteredUnits} out of ${totalUnits} ${label}` }}
  </v-chip>
</template>

<script>
  export default {
    props: {
      label: String,
      filteredUnits: [Number, String],
      totalUnits: [Number, String]
    }
  }
</script>
