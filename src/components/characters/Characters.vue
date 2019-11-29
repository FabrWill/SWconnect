<!-- conteudo dinamico -->
<template>
      <v-col cols="10" class="mx-auto">

        <v-card class="ma-5 pa-5" >
          <p class="display-1 text--primary">
            {{ data.name }}
          </p>
          <v-row>
            <v-col>
              <v-input class="ma-2 subtitle-2" hint="height" persistent-hint>{{ data.height }}m</v-input>
              <v-input class="ma-2 subtitle-2" hint="mass" persistent-hint>{{ data.mass }}kg</v-input>
            </v-col>
            <v-col>
              <v-input class="ma-2 subtitle-2" hint="gender" persistent-hint>{{ data.gender }}</v-input>
              <v-input class="ma-2 subtitle-2" hint="eye color" persistent-hint>{{ data.eye_color }}</v-input>
            </v-col>
            <v-col cols="12">
              <div class="text--primary">
                <b>Films</b>
              </div>
              <div v-for="(films, key) in data.films"
                   v-bind:key="key">

                  <v-banner class="subtitle-2">{{ films }}</v-banner>

              </div>
            </v-col>
          </v-row>


        </v-card>

      </v-col>

</template>


<script>

  export default {

    props: ['data']

  }


</script>
