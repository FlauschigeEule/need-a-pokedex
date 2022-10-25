// This is an IIFE of the Pokemon list

let pokemonRepository = (function() {

    //This is the empty array of Pokemon
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //ensure pokemon is an object with a name, height, and types and allow it to be added to the pokemonList
    function add(pokemon) {
        if (
            typeof pokemon === 'object' && 
            'name' in pokemon
        ) {
        pokemonList.push(pokemon);
        } else {
            console.log('This is not a valid pokemon!');
        }
    }

    //function to return all Pokemon from the list
    function getAll() {
        return pokemonList;
    }

    //create and append list item and button, assign button text and add an event listener 
    function addListItem(pokemon) {
        let pokemonList1 = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemonList_item');
        button.addEventListener('click', function showDetails(pokemon) {
            console.log(pokemon);
        });
        listItem.appendChild(button);
        pokemonList1.appendChild(listItem);
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        });
    }

    //function for clicking on pokemon button
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    //function to load list of pokemon
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        });
    }

    //function to load details of pokemon
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    //function to show pokemon details
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        }).catch(function (e) {
            console.log(error);
        });
    }

    //return statement
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
    });
});
