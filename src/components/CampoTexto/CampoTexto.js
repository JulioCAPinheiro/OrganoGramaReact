import './CampoTexto.css'

export const CampoTexto = (props) => {
   
    const placeholderModificada = `${props.placeholder}...`
    
    // Armazenando os valores em uma váriavel e colocando seu value

    const aoDigitado = (evento) => {
       props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo_Texto">
            <label
             className='labelNome' for="">{props.label}
            </label>
            <input onChange={aoDigitado} required={props.obrigatorio} className='inputs' type="text" name="Nome" id="idNome" placeholder={placeholderModificada} />
        </div>
    )

}
//Utilizando o parametro "Props" para chamar os componentes