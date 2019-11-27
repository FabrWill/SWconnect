<template>

  <v-autocomplete
    v-model="select"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    cache-items
    hide-no-data
    hide-details
    label="Search here:"
    placeholder
    prepend-icon="mdi-magnify"
    return-object
  >
  </v-autocomplete>

</template>

<script>

  const axios = require('axios');

  export default {
    name: "search",
    data () {
      return {
        model: null,

      }
    }

  }

</script>
