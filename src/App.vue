<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>

/*  import da fonte em um contexto geral */
@font-face{
    font-family: "starwars";
    src: url('assets/Starjhol.ttf');
}

.starwars {
  font-family: "starwars" !important;
}

</style>
