import './Formulario.css'
import CampoTexto from '../CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa'
import { Botao } from '../Botao/Botao'
import { useState } from 'react'

export const Formulario = (props) => {


    const [nome, setNome] = useState('')
    const [Cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [canal, setCanal] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            Cargo,
            imagem,
            canal
        })
        setNome("")
        setCargo("")
        setImagem("")
        setCanal("")
    }

    return (
        <section className="principal_formulario">
            <form onSubmit={aoSalvar} className='principal_formulario_form'>
                <h2>Preenche os dados para criar o canal do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    valor={Cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Canais"
                    itens={props.canaisDoYoutube}
                    valor={canal}
                    aoAlterado={valor => setCanal(valor)}
                />

                <Botao texto="Criar Canal" />

            </form>
        </section>
    )
}