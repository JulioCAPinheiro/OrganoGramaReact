import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    return (
        <div className='lista_suspensa'>
            <label>{props.label}</label>
            <select className='lista_selecione'
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.required}
                value={props.value}>
                <option value=""></option>
                
                {props.itens.map(item =>
                    <option key={item}>{item}</option>
                )
                }
            </select>
        </div>
    )
}

