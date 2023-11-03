import './App.css';

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Carrossel from './components/carrossel/Carrossel';
import Card from './components/card/Card'
import angular from './assets/Angular.svg'
import escritora from './assets/Escritora.svg'

function App() {  

  return (
    <>
      <Header />
      <Banner />
      <Carrossel titulo="últimos lançamentos"/>
      <Card 
        descricao="Talvez você também se interesse por..."
        titulo="Angular 11 e Firebase"
        texto="Construindo uma aplicação integrada com a plataforma do Google"
        foto={angular}
      />
      <Carrossel titulo="mais vendidos"/>
      <Card         
        descricao="Autora do mês"
        titulo="Juliana Agarikov"
        texto="Analista de sistemas e escritora, Juiana é especialista em Front-End."
        foto={escritora}
      />
    </>
  )
}

export default App