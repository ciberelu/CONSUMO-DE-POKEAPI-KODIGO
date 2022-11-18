import "../styles/Input.css"

function Input(props) {

  


  return (
    
    <input 
    type="text"
    placeholder="Ingresa tu pokemon"
    onChange={props.handleBuscarNombre}
    />
  )
}

export default Input