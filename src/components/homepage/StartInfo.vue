<template>
  <v-parallax class="parallax"
              src="../../images/star_background.jpg"
              max-height="600px">

      <v-container>
        <v-row
          align="center"
          justify="center">

          <v-col cols="12">
            <h4 class="title white--text yellow--text mt-9"
                align="center">
                Connect
            </h4>
          </v-col>

          <v-col cols="12">
            <p
              align="center"
              class="white--text pa-10 ma-10"> A long time ago in a galaxy far,
              far away, some confused people and several different and diverse
              planets characters who ... what was he really like? If this is
              yours doubt we are the solution just search above to find out
              about your forgotten character.
            </p>


          </v-col>
        </v-row>

      </v-container>
  </v-parallax>
</template>


<style scoped>

.title {
  font-family:"starwars", sans-serif !important;
  font-size:60px !important;
}

.parallax {
  height: 600px !important;
}
</style>


<script>

  export default {
    name: 'startInfo'

  }

</script>
