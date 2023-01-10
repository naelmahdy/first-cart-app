import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Products from './components/Products';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />

      </Routes>
    </div>
  );
}

export default App;
