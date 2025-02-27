import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import HOME from './pages/HOME';
import Product from './pages/Product';

import './style_router.scss';


function App() {
  return (
    <BrowserRouter basename='/react_test'>

      <header>
        <NavLink to='/HOME'>HOME</NavLink>
        <span>|</span>
        <NavLink to='/Product'>Product</NavLink>
      </header>

      <main>
        <Routes>
          <Route path="/HOME" element={<HOME/>}/>
          <Route path="/Product" element={<Product/>}/>
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
