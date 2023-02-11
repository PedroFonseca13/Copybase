const pokemonName = document.querySelector('.pokemon__name');
const pokemonID = document.querySelector('.pokemon__id');
const pokemonIMG = document.querySelector('.pokemon__img');
const pokemonHP = document.querySelector('.pokemon__hp');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');

const fetchPokemon = async (pokemon) => {
  const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
  const data = await APIresponse.json()
  return data
}

renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = 'pokemon'
  pokemonID.innerHTML = ''

  const data = await fetchPokemon(pokemon)

  if (data) {
    pokemonIMG.style.display = 'block'
    pokemonName.innerHTML = data.name
    pokemonID.innerHTML = data.id
    pokemonIMG.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    console.log(pokemonHP.innerHTML = data['stats']['stat'])
    input.value = ''
  } else {
    pokemonIMG.style.display = 'none'
    pokemonName.innerHTML = 'Não encontrado :c'
    // pokemonID.innerHTML = data.id
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  renderPokemon(input.value)
})
