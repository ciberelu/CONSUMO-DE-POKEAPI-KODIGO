//importacion de la hoja de estilos

import {  useState } from "react"
import "../styles/PokemonContainer.css"

//importación de los componentes

import Buscar from "./Buscar"
import Input from "./Input"
import Pokemon from "./Pokemon"

function PokemonContainer(props) {

  const [namePokemon, setnamePokemon] = useState("pikachu")
  const [imgPokemon, setimgPokemon] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png")

  
  let fetchApi = async () =>{
    let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon.toLowerCase()}`)
    let data = await resp.json()
    // console.log(data);
    console.log(data.sprites.other["official-artwork"].front_default);
    setimgPokemon(data.sprites.other["official-artwork"].front_default)
    // setnamePokemon(data)
  }

    let handlerName = (e)=>{
    // console.log(e.target.value);
    setnamePokemon(e.target.value)
    console.log(namePokemon);

    }

    

  
  return (
    <section className="pokemon__section" >
        <h1 className="pokemon__section__title">Tu Pokemon</h1>
        <div>
          <Input
            handleBuscarNombre = {handlerName}
          />
          <Buscar
            handleBuscarNombre = {() => fetchApi()}
          />
        </div>


        <div className="pokemon__section__container">
          <Pokemon 
            img = {imgPokemon}
            name = {namePokemon}
          />
        </div>
    </section>
  )
}

export default PokemonContainer
