import { useState } from 'react';
import Banner from './components/Banner';
import Canais from './components/Canais/Canais';
import Formulario from './components/Formulario';
import { Rodape } from './components/Rodape/Rodape';


function App() {


  const canal = [
    {
      nome: "Gameplay",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9"
    },
    {
      nome: "Estudos",
      corPrimaria: "#82cffa",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "Programação",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    },
    {
      nome: "Gatronomia",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoCadastrarColaborador = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
      canaisDoYoutube={canal.map(canaisDoYoutube => canaisDoYoutube.nome)}
      aoColaboradorCadastrado={colaborador => aoNovoCadastrarColaborador(colaborador)} />
     
      {canal.map(canal => <Canais
      key={canal.nome} 
      nome={canal.nome}
      corPrimaria={canal.corPrimaria}
      corSecundaria={canal.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.canal === canal.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
