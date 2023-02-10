const pokemonName = document.querySelector('.pokemon__name');
const pokemonID = document.querySelector('.pokemon__id');

const fetchPokemon = async (pokemon) => {
  const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await APIresponse.json()
  return data
}

renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon)
  console.log(data.name)
  console.log(data.id)
  pokemonName.innerHTML = data.name
  pokemonID.innerHTML = data.id
}

renderPokemon('13')
