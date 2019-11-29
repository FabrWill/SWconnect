
const axios = require('axios');

export default {
  name: 'CharacterController',

  methods: {

      /*
      *
      * pega e busca o filme
      * no banco de dados para preencher o formulário de personagem
      *
      */
      async getCharacter(char, _callback) {

        var films = []

        axios.get(`https://swapi.co/api/films/`).then((response) => {

          char.films.forEach(function (element, index) {

            //transforma isso: "https://swapi.co/api/films/1/" em "1"
            var string = element.replace("https://swapi.co/api/films/", "")
            string = string.replace("/", "")

            films[index] = response.data.results[string].title

          })


        }).finally(() => {

          char.films = films

          _callback(char)
        })


      },

      /*
      *
      * Conserta o problema de nao virem todos os dados
      * percorre os valores atraves do filtro passado para pesquisar
      * se baseia no codigo exemplo de:
      * http://jonathansoma.com/lede/foundations-2018/classes/apis/multiple-pages-of-data-from-apis/
      */
      async getAll(method, val){

        let res = {}
        let next, response

        if(method == "normal"){

          response = await axios.get(`https://swapi.co/api/people/?search=${val}`)

          res = response.data.results
          next = response.data.next

          do {


            response = await axios.get(next)

            // logica para adicionar os dados em um json object
            response.data.results.forEach((element) => {

              res[res.length + 1] = element
            })

            next = response.data.next

          } while (next != null);


        } else if ( method == "gender" ){

           response = await axios.get(`https://swapi.co/api/people/?search=${val}`)

          response.data.results.forEach((element) => {

            if (element.gender == val) { res[res.length+1] = element }

          })

          next = response.data.next


          do {


            response = await axios.get(next)

            response.data.results.forEach((element) => {

              if (element.gender == val) { res[res.length+1] = element }

            })

            next = response.data.next


          } while (next != null);

        }

        return res

      },


  }

}
