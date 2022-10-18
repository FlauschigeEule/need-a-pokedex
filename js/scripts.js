// This is an array of objects - my Pokemon list

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

// This is a for loop that iterates over each item in the Pokemon list and highlights the biggest Pokemon

// for (let i=0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height >= 1.0) {
//         document.write(pokemonList[i].name + ' ' + '(height: ' + pokemonList[i].height + ')' + ' ' + '- Wow, that\'s big!' + '<br>');
//     } else {
//         document.write(pokemonList[i].name + ' ' + '(height: ' + pokemonList[i].height + ')' + '<br>');
//     }
// };

// This will be a forEach loop that iterates over every Pokemon in the list 

pokemonList.forEach(function(pokemon) {
    console.log(pokemon.name + ' is a pokemon of the type ' + pokemon.types + ' and its height is ' + pokemon.height + '! The pokemon weighs in at ' + pokemon.weight + '!');
    document.write(pokemon.name + ' ' + '(height:' + pokemon.height + ')' + '<br>');
}
);

