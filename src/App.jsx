import Header from "./components/header/Header";
import Hero from "./containers/hero";
import Projetos from "./containers/projetos/projetos";
import Sobre from "./containers/sobre/sobre";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
    </>
  );
}

export default App;
