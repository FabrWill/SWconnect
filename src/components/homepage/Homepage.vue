<template>
  <div>
    <!-- barra superior do site -->
    <app-header/>

    <!-- conteudo do site -->
    <v-parallax class="parallax"
                src="../../images/star_background.jpg"
                max-height="580px">

        <v-container>
          <v-row
            align="center"
            justify="center">

            <v-col cols="12">
              <h4 class="title white--text yellow--text mt-9 pt-9"
                  align="center">
                  Connect
              </h4>
            </v-col>

            <v-col cols="12">
              <p
                align="center"
                class="white--text pa-10 ma-10">
                A um longo tempo atrás em uma galáxia muito, muito distante,
                algumas pessoas confusas e vários planetas diferentes e diversos
                personagems que... como era mesmo que ele era? Se essa é sua
                duvida, nós somos a solução basta pesquisar
                acima para descobrir sobre seu personagem esquecido.
              </p>


            </v-col>
          </v-row>

        </v-container>
    </v-parallax>

  </div>
</template>

<script>
  import AppHeader from './AppHeader.vue'


  export default {
    name: 'Homepage',

    components: {
      AppHeader
    }
  }

</script>

<style scoped>

.title {
  font-family:"starwars", sans-serif !important;
  font-size:60px !important;
}

.parallax {
  height: 580px !important;
}

.loading {
  margin: 0px auto;
}
</style>
