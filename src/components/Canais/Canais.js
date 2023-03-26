import { Colaborador } from "../Colaborador/Colaborador";
import "./Canais.css"

const Canais = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
       (props.colaboradores.length > 0) && <section className="canais" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            
            <div className="colaboradores">
                {props.colaboradores.map
                    (colaboradores => <Colaborador 
                        cordeFundo={props.corPrimaria}
                        key={colaboradores.nome}
                        nome={colaboradores.nome}
                        cargo={colaboradores.Cargo}
                        imagem={colaboradores.imagem}
                    />)}
            </div>
        </section>
    );
}

export default Canais;