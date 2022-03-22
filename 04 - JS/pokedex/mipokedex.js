// Negocio
function fetchPokemon (searchValue){
    const pokemonSearch = searchValue.toLowerCase()

    const regexName = new RegExp('^[A-z\d]+$')
    const noNameSearch = !regexName.test(pokemonSearch);
    if (noNameSearch) {
        return
    }

    callRepo(pokemonSearch) 
    .then((pokemon)=>{
        showInfo (pokemon)
        showError ('', false)
    })
    .catch( (error)=> showError(error.message) );
}

// Repositorio
async function callRepo (pokemonSearch) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`;
    const res = await fetch(url)
    
    if (res.status != "200") {
        throw  new Error("No encontramos tu Pokemón")
    }

    return await res.json();
}

// Presentación
function fetchOnEnter (event) {
    const inputValue = document.getElementById('pokeName').value
    const noEnterSearch = event.code != 'Enter'

    if (noEnterSearch){
        return
    }

    fetchPokemon(inputValue);
}

function showInfo (pokemon) {
    const {types, stats, moves} = pokemon

    const name = document.getElementById("name")
    name.textContent = pokemon.name;
    const img = document.getElementById("pokeImg")
    img.src = pokemon.sprites.other["official-artwork"].front_default

    const hp = document.getElementById("hp")
    hp.value = stats[0].base_stat
    const atk = document.getElementById("atk")
    atk.value = stats[1].base_stat
    const def = document.getElementById("def")
    def.value = stats[2].base_stat
    const spatk = document.getElementById("spatk")
    spatk.value = stats[3].base_stat
    const spdef = document.getElementById("spdef")
    spdef.value = stats[4].base_stat
    const spd = document.getElementById("spd")
    spd.value = stats[5].base_stat

    const type1 = document.getElementById("type1")
    const type2 = document.getElementById("type2")

    type1.textContent = ingToSpan[types[0].type.name] ?? types[0].type.name

    if (types.length>1) {
        type2.textContent = ingToSpan[types[1].type.name] ?? types[1].type.name
        type2.style.display = 'block'
    } else {
        type2.style.display = 'none'
    }
    
    const move1 = document.getElementById("move1")
    const move2 = document.getElementById("move2")
    const move3 = document.getElementById("move3")
    const move4 = document.getElementById("move4")

    move1.textContent = [moves[0].move.name] ?? moves[0].move.name

    if (moves.length>1) {
        move2.textContent = [moves[1].move.name] ?? moves[1].move.name
        move3.textContent = [moves[2].move.name] ?? moves[2].move.name
        move4.textContent = [moves[3].move.name] ?? moves[3].move.name
    } 

    const weight = document.getElementById("weight")
    weight.textContent = `${pokemon.weight/10} kg`
    const height = document.getElementById("height")
    height.textContent = `${pokemon.height/10} m`
}

function showError (message, showError=true) {
    const divToHideDisplay =  showError ? 'none' : 'flex'
    const divToShowDisplay =  (!showError) ? 'none' : 'block'
    const divToHide = document.querySelectorAll('div.imageStatsContainer, div.skillsContainer')
    for (const div of divToHide) {
        div.style.display = divToHideDisplay;
    }
    const divToShow = document.querySelector('div.errorSnorlax')
    divToShow.style.display = divToShowDisplay;
}

const ingToSpan = {
    grass: 'Planta',
    poison: 'Veneno',
    fire: 'Fuego',
    electric: 'Electrico',
    fighting: 'Peleador',
    bug: 'Bicho',
    ground: 'Tierra',
    steel: 'Metal',
    flying: 'Volador',
    rock: 'Roca',
    psychic: 'Psíquico',
    ice: 'Hielo',
    ghost: 'Fantasma',
    dragon: 'Dragón',
    dark: 'Oscuro',
    fairy: 'Hada'
};