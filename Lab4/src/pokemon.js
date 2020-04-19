function getAbilityInfo(abilityUrl) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', abilityUrl, false);
    console.log(abilityUrl);

    xhr.send();
    if (xhr.status != 200) {
        console.log("ERROR: Request returned error");
        return null;
    }

    const EFFECT_DATA = JSON.parse(xhr.responseText);
    return EFFECT_DATA.effect_entries[0].effect;
}

function getPokemonInfo(pokemonName) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "https://pokeapi.co/api/v2/pokemon/" + pokemonName, false);

    xhr.send();
    if (xhr.status != 200) {
        console.log("ERROR: Request returned error");
        return null;
    }

    let pokeInfo = `<p>Name: ${pokemonName}</p>`;//.replace("${pokemonName}", pokemonName);

    const POKEMON_DATA = JSON.parse(xhr.responseText);

    for (let i = 0; i < POKEMON_DATA.abilities.length; i++) {
        let ability = POKEMON_DATA.abilities[i].ability;
        let abilityName = ability.name;
        let abilityUrl = ability.url;
        let abilityDesc = getAbilityInfo(abilityUrl);
        pokeInfo += `<p>${abilityName}: ${abilityDesc}</p>`//.replace("${abilityName}", abilityName)
        //.replace("${abilityDesc}", abilityDesc);
    }
    return pokeInfo;
}

export default function fillWithPokemonData(pokemonName) {
    let elem = document.getElementById("app");
    elem.innerHTML = getPokemonInfo(pokemonName);
}