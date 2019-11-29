<template>
  <div>

    <!-- CAIXA DE PESQUISA DA APPHEADER -->
    <v-autocomplete
    v-model="model"
    :items="results"
    :search-input.sync="search"
    hide-no-data
    hide-selected
    return-object
    item-text="name"
    item-value="key"
    label="Type to Search"
    prepend-icon="mdi-magnify"
    @change="onChange"
    >
    </v-autocomplete>


  </div>

</template>


<script>


  import CharacterController from '../characters/CharactersController.js';

  export default {

    data: () => ({
      results: [],
      model: "",
      search: null,
    }),

    mixins: [CharacterController],
    /*
    * funcoes de loading
    * envia para homepage o result pego na pesquisa
    * remove o loading enviando os dados da pesquisa
    */
    methods: {
      onChange(value) {

        if(this.items.length > 0 ){

          this.$emit('search', value)
        }

      }
    },

    /*
    * Metodo de formatacao dos objetos retornados pela api
    * Retorna um objeto assinado apenas com os nomes dos personagens
    * usado para preencher a lista do autocomplete
    */
    computed: {

      items () {

        return this.results.map(entry => {

          const name = entry.name

          return Object.assign({}, entry, { name })
        })
      },
    },


    watch: {
      search (val) {
        //conserta o erro de os dados ainda serem os mesmos
        if (val == "") { this.items = {} }

        // envia o evento para ocorrer o loading na homepage
        this.$emit('loading', true)

        // Conserta erro de itens ja terem sido retornados
        if (this.items.length > 0) return

        // carregamento dos items pela lib axios
        this.getAll("normal", val).then((result) => {

          this.results = result
        })
      },
    },
  }

  /*
  *
  * criado por: William Fabre
  * Script usado para identificacao dos personagens de star wars
  * utiliza da biblioteca vuetify para construcao do input com autocomplete
  * codigo exemplo utilizado como referencia no topico Searching API
  * referencia da biblioteca:
  * https://vuetifyjs.com/en/components/autocompletes
  *
  */
</script>


<style scoped>

  /*
  * CONSERTA ERRO DE TAMANHO NA APP HEADER
  */
  .v-autocomplete {

      height: 32px;

  }

</style>
