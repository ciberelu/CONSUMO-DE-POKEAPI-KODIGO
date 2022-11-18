
import React, { Component } from 'react'
import Buscar from "./Buscar"

import "../styles/Pokemon.css"

export class Pokemon extends Component {
  constructor(props){
    super(props)
  }
  

  render() {

    return (
      <div className="pokemon">
        <div className="pokemon__img__contenedor">
            <img className="pokemon__img" src={this.props.img} alt="pokemon" />
        </div>
        
        <h2 className="pokemon__name">{this.props.name}</h2>

        
        
      </div>
    )
  }
}

export default Pokemon

