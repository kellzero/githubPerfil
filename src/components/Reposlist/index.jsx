import { useEffect, useState } from "react";
import styles from "./Reposlist.module.css";

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [deuErro, setDeuErro] = useState(false);
    const [mensagemErro, setMensagemErro] = useState(""); // Novo estado para a mensagem de erro

    useEffect(() => {
        // Resetando erros e repositórios ao mudar de usuário
        setDeuErro(false);
        setMensagemErro("");
        setRepos([]);

    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("Usuário não encontrado"); // Dispara erro se for 404
          } else {
            throw new Error("Ocorreu um erro ao buscar os dados"); // Dispara erro para outros status
          }
        }
        return res.json();
      })
      .then((resjson) => {
        setRepos(resjson);
      })
      .catch((e) => {
        setDeuErro(true);
        setMensagemErro(e.message); // Define a mensagem de erro apropriada
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      {deuErro ? (
        <p className={styles.errorMessage}>{mensagemErro}</p> // Exibe a mensagem de erro
      ) : (
        <ul className={styles.list}>
          {repos.map(({ id, name, language, html_url }) => (
            <li className={styles.listItem} key={id}>
              <div className={styles.itemName}>
                <b>Nome: </b>
                {name}
              </div>
              <div className={styles.itemLanguage}>
                <b>Linguagem: </b>
                {language}
              </div>
              <div>
                <a
                  className={styles.itemLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={html_url}
                >
                  Visitar no GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
