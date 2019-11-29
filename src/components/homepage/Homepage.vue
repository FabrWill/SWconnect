<template>
  <div>
    <!-- barra superior do site -->
    <app-header>
      <search @search="onSearch" @loading="onLoading"/>
    </app-header>

    <!-- conteudo do site -->
    <loading  :condition="searched"
              v-if="isLoading">

              <!-- Area do card do personagem -->
              <characters :data="char"/>

    </loading>

    <!-- TODO: arrumar erros de dinamismo -->
    <start-info v-if="!isLoading"/>


  </div>
</template>

<script>
  import appHeader from './AppHeader.vue'
  import loading from '../loading/Loading.vue'
  import search from '../search/Search.vue'
  import startInfo from './StartInfo.vue'

  import characters from '../characters/Characters.vue'
  import CharacterController from '../characters/CharactersController.js';



  export default {
    name: 'Homepage',

    components: {
      appHeader,
      search,
      loading,
      startInfo,
      characters
    },

    mixins: [CharacterController],

    data: () => {
      return {
        isLoading: false,
        searched: false,
        char: {}
      }
    },

    methods: {

      onSearch (val) {

        this.getCharacter(val, (char) => {

          this.char = char

          this.searched = true
        })

      },

      onLoading () {

        this.isLoading = true
      }
    }

  }

</script>
