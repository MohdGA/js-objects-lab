console.log(game);const pokemon = require('./data.js');
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};
// console.dir(pokemon, { maxArrayLength: null });
// Q3
game.difficulty = "Med";
// Q4
game.party.push(pokemon[0]);
// Q5
for(let i = 0; i < pokemon.length; i++){
    if(pokemon[i].hp > 130){
        game.party.push(pokemon[i]);
    };
};
// Q6
for(let i = 0; i < game.gyms.length; i++){
    if(game.gyms[i].difficulty < 3){
        game.gyms[i].completed = true;
    };
};
// another way to solve question 6
game.gyms.forEach((element) => {
    if(element.difficulty < 3){
        element.completed = true;
    };
});
// Q7 i didnt understand the question right, ):
// Q8
pokemon.forEach((names) => {
    console.dir(names.name, { maxArrayLength: null });
})
// Q9
for(let i = 0; i < pokemon.length; i++){
    if(pokemon[i].starter === true){
        console.log(pokemon[i].name);
    }
};
// another way to solve question 9
// pokemon.forEach((element) => {
//     if(element.starter === true){
//         console.log(element.name);
//     }
// });
// Q10
game.catchPokemon = (pokemonObj) => {
    game.party.push(pokemonObj);
};
game.catchPokemon(pokemon[3]);
// Q11
game.catchPokemon = (pokemonObj) => {
    game.party.push(pokemonObj);
    game.items[1].quantity -= 1;
};
game.catchPokemon(pokemon[6]);
// Q12
game.gyms.forEach((element) => {
    if(element.difficulty < 6){
        element.completed = true;
    };
});
// Q13
game.gymStatus = () => {
    const gymTally = {
        completed: 0,
        incomplete: 0,
    };
    game.gyms.forEach((element) => {
        if(element.completed){
            gymTally.completed += 1;
        }else{
            gymTally.incomplete += 1;
        }
    });
    console.log(gymTally);
};
// Q14
game.partyCount = () => {
    return game.party.length;
}
// Q15
for(let i = 0; i < game.gyms.length; i++){
    if(game.gyms[i].difficulty < 8){
        game.gyms[i].completed = true;
    }
};
// Q15
console.log(game);
