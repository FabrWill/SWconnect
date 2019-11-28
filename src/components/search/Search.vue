<template>
  <div>

    <!-- CAIXA DE PESQUISA DA APPHEADER -->
    <v-autocomplete
    :items="results"
    :loading="isLoading"
    hide-no-data
    hide-selected
    return-object
    item-text="name"
    item-value="key"
    label="Type to Search"
    prepend-icon="mdi-magnify"
    @input="search"
    >
    </v-autocomplete>


  </div>

</template>


<style scoped>

  /*
  * CONSERTA ERRO DE TAMANHO NA APP HEADER
  */
  .v-autocomplete {

      height: 32px;

  }

</style>


<script>

  const axios = require('axios');

  export default {


    data: () => ({
      results: [],
      isLoading: false,
      model: "",
    }),


    /*
    * metodo - handleInput
    * recebe o value de input para o funcionamento do search
    */
    methods: {

      search (val) {
        // Conserta erro de itens ja terem sido retornados
        if (this.items.length > 0) return

        // Conserta erro de itens estarem sendo carregados
        if (this.isLoading) return

        this.isLoading = true


        // carregamento dos items pela lib axios
        // TODO: descobrir por que o ES6 n funciona aqui
        axios.get('https://swapi.co/api/people/?search=' + val)
              .then((res) => {

                // res = res.json()

                 this.count = res.data.count
                 this.results = res.data.results

              })
              .catch(err => {
                alert(err)
              })
             .finally(() => ( this.isLoading = false ))
      },
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
