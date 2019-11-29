<template>
  <v-app-bar
    color="primary"
  >
    <!-- Logo para desktops e telas grandes -->
    <v-img
      class="d-none d-lg-block"
      src="../../images/logo_black.png"
      aspect-ratio="1"
      max-width="180"
      max-height="40"
    >
    </v-img>

    <!-- logo para telas pequenas -->
    <v-img
      class="d-lg-none"
      src="../../images/icon.png"
      aspect-ratio="1"
      max-width="40"
      max-height="40">
    </v-img>

    <v-spacer></v-spacer>

    <div>
      <!-- Icone de pesquisa -->
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <!-- Input de busca com auto complete chamado da classe Search/search.vue -->
      <slot/>

    </div>

    <!-- TODO: menu de filtros -->

  </v-app-bar>
</template>

<script>


export default {
  name: 'AppHeader',

}
</script>
