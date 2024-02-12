
import './App.css'
import './components/NavBar/NavBar.css';
import ItemListcontainer from './components/ItemListcontainer/ItemListcontainer'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ComponenteError from './components/ComponenteError/ComponenteError';


function App() {

  return (

    <>
    <BrowserRouter>
    <NavBar />

    <Routes>

    <Route path='/' element={<ItemListcontainer/>}/>

     <Route path='/category/:categoryId' element={<ItemListcontainer/>}/>

     <Route path= '/detalle/:id'element={<ItemDetailContainer/>}/>

     <Route path='*' element={<ComponenteError/>}/>


    </Routes>
     
    
      
      
      <Footer />
      </BrowserRouter>

    </>

  )

}

export default App
