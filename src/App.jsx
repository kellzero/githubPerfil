import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/Reposlist";
import styles from "./components/Perfil/perfil.module.css";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSearch = () => {
    setNomeUsuario(inputValue);
  };

  return (
    <div className="container">
      <h4>Insira um nome de usuário do github</h4>
      <input className={styles.form} type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit" onClick={handleSearch} >Buscar</button>


      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </div>
  )
}

export default App;
