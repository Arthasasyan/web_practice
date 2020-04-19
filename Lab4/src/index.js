import fillWithUserData from "./home.js";
import fillWithPokemonData from './pokemon';

function fillWithDitto() {
    return fillWithPokemonData('ditto')
}

document.getElementById("homeTab").onclick = fillWithUserData;
document.getElementById("pokemonTab").onclick = fillWithDitto;
fillWithUserData();
