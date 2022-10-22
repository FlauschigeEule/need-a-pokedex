// This is an IIFE of the Pokemon list

let pokemonRepository = (function() {

    //This is the list of Pokemon
    let pokemonList = [
        {
            name: 'Balbasaur',
            types: ['grass', 'fire'],
            height: 0.7,
            weight: 6.9
        },
        {
            name: 'Charmander',
            types: 'fire',
            height: 0.6,
            weight: 8.5
        },
        {
            name: 'Eevee',
            types: 'normal',
            height: 0.3,
            weight: 6.5
        },
        {
            name: 'Growlithe',
            types: 'fire',
            height: 0.7,
            weight: 19
        },
        {
            name: 'Hoothoot',
            types: ['flying', 'normal'],
            height: 0.7,
            weight: 21.2
        },
        {
            name: 'Nidoran',
            types: 'poison',
            height: 0.4,
            weight: 7
        },
        {
            name: 'Pikachu',
            types: 'electric',
            height: 0.4,
            weight: 6
        }, 
        {
            name: 'Ponyta',
            types: 'fire',
            height: 1.0,
            weight: 30
        },
        {
            name: 'Psyduck',
            types: 'water',
            height: 0.8,
            weight: 19.6
        },
        {
            name: 'Sandshrew',
            types: 'ground',
            height: 0.6,
            weight: 12
        },
        {
            name: 'Squirtle',
            types: 'water',
            height: 0.5,
            weight: 9
        },
        {
            name: 'Vulpix',
            types: 'fire',
            height: 0.6,
            weight: 9.9 
        }
    ];

    //ensure pokemon is an object with a name, height, and types and allow it to be added to the pokemonList
    function add(pokemon) {
        if (
            typeof pokemon === 'object' && 
            'name' in pokemon && 
            'height' in pokemon &&
            'types' in pokemon
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
    }

    //function for clicking on pokemon button
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    //return statement
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
});

