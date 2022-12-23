import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

let numUnfunded = GAMES_JSON.reduce((total, item) => {
    item.pledged < item.goal ? total++ : total+=0;
    return total;
}, 0);

console.log(numUnfunded)