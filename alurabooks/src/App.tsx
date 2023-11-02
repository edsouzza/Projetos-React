import './App.css';

import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Carrossel from './components/carrossel/Carrossel';

function App() {  

  return (
    <>
      <Header />
      <Banner />
      <Carrossel titulo="últimos lançamentos"/>
    </>
  )
}

export default App