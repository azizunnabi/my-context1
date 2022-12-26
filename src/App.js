import logo from './logo.svg';
import './App.css';
import { Products} from './Products';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Store from './Store';
import { ProductDetails } from './ProductDetails';

function App() {
  return (
    <Store>
      <BrowserRouter>
     
      <Routes>
        <Route path='/' element={ <Products />} />
        
        <Route path='/productdetails/:id' element={ <ProductDetails />} />
      
      </Routes>
      </BrowserRouter>
     
    </Store>
  )
}

export default App;
