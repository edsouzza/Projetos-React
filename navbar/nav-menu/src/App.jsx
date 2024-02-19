import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Info from './Pages/Info/Info'
import Contacts from './Pages/Contacts/Contacts'
import Products from './Pages/Products/Products'

function App() {

  return (
   <BrowserRouter>
     <Header title='LinosDev' />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
   </BrowserRouter>
  )
}

export default App
