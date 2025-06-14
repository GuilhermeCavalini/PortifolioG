import "./App.css";
import { Sobre } from "./components/Banner/Banner";
import { Contato } from "./components/Contatos";
import { Habilidades } from "./components/Habilidades";
import Cabecalho from "./components/Header";
import { Projetos } from "./components/Projetos";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Cabecalho />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
    </>
  );
}

export default App;
