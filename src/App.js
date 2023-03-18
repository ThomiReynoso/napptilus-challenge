import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './pages/productDetails';
import ProductList from './pages/productList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
