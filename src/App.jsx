import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Forms";
import ReposList from "./components/Reposlist";

function App() {
  const [formularioEstaVisisel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('');
  return (
    <>
    <input type="text" onBlur={(e)=> setNomeUsuario(e.target.value)} />


    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario}/>
        <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}
    {/* {formularioEstaVisisel && (
      <Formulario/>
    )}
    <button onClick={()=> setFormularioEstaVisivel(!formularioEstaVisisel)} type="button">Toggle Form</button> */}
    </>
  )
}

export default App;
