
        let name = document.getElementById('FAV').value;
        let lista = document.getElementById("listaPokemon")

        function consultarPokemon(name, number) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(function (response) {
            response.json()
            .then(function (pokemon) {
                crearPokemon(pokemon, number)
               
        })
        })}

        function rivalPokemon(id, number) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function (response) {
            response.json()
            .then(function (pokemon) {
                crearPokemon(pokemon, number)
        })
        })}


        function getName() {
        name = document.getElementById('FAV').value;
        consultarPokemon(name, 1)
       
    }

        function peleaDePokemones() {
        let rival = Math.round(Math.random() * 150)
         
        rivalPokemon(rival, 2)
}

        function crearPokemon(pokemon, number) {

       let item = lista.querySelector(`#pokemon-${number}`)
            let imagen = item.getElementsByTagName("img")[0]
            imagen.setAttribute("src", pokemon.sprites.front_shiny)
            let nombre = item.getElementsByTagName("h3")[0]
            nombre.textContent = pokemon.name
            let peso = item.getElementsByTagName("h4")[0]
            peso.textContent = pokemon.weight
            let tipo = item.getElementsByTagName("h5")[0]
            tipo.textContent = pokemon.types[0].type.name
            let habilidad = item.getElementsByTagName("h6")[0]
            habilidad.textContent = pokemon.abilities[0].ability.name
   
        }

        peleaDePokemones();