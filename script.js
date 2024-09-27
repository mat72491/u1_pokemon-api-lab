const button = document.querySelector('#btn')
const pokemonInput = document.querySelector('#searchbar')
const imageContainer = document.querySelector('#imgContainer')
const name = document.querySelector('#nameContainer')
const pokeID = document.querySelector('#pokemonID')

button.addEventListener('click', async () => {
    let pokemon = pokemonInput.value
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(response)
    let pokepic = response.data.sprites.front_default
    imageContainer.setAttribute ('src', pokepic)
})  
button.addEventListener('click', async () => {
    let pokemon = pokemonInput.value
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(response)
    let name = response.data.name
    nameContainer.textContent = (name)
})  
button.addEventListener('click', async () => {
    let pokemon = pokemonInput.value
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(response)
    let pokeID = response.data.id
    pokemonID.textContent = (`nO. ${pokeID}`)
})  
