import "../styles/Buscar.css"

import React from 'react'

function Buscar(props) {
  return (
    <button
      onClick={props.handleBuscarNombre}
    >Buscar Pokemon</button>
  )
}

export default Buscar