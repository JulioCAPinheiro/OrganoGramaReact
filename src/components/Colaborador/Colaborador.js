import "./Colaborador.css"

export const Colaborador = (props, cordeFundo) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" cor = {props.cordeFundo}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className="rodape">
              <h4>{props.nome}</h4>
              <h5>{props.cargo}</h5>
            </div>
        </div>
    );
}

