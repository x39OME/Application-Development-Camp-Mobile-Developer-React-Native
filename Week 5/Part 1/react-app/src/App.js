// import logo from './logo.svg';
import './App.css';
// import About from './components/about/about';
// import Home from './components/home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
// import Profile from './components/profile/profile';
import AboutFuctional from './components/about/aboutFuctional';
import Login from './components/login/login';
import MainHeader from './components/layout/header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Product from './components/product/product';
import NotFound from './components/notFound/notFound';
import SingleProduct from './components/singleProduct/singleProduct';
import MenProduct from './components/product/menProduct';
import WomenProduct from './components/product/womenProduct';
import Categories from './components/categories/categories';
import SingleCategorie from './components/categories/singleCate';
import AddProduct from './components/product/addProduct';

function App() {
  return (
  <>
    <MainHeader /> 
    <div className='container mt-4'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutFuctional />}/>
        <Route path="/cate" element={<Categories />}/>
        <Route path="/add" element={<AddProduct />}/>

        <Route path="/product" element={<Product />}>
          <Route path="men" element={<MenProduct />}/>
          <Route path="women" element={<WomenProduct />}/>
        </Route>

        <Route path='/login' element={<Login />}/>
        <Route path='/single/:id' element={<SingleProduct/>}/>
        <Route path='/cate/:name' element={<SingleCategorie/>}/>


        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>

  </>
  );
}

export default App;
