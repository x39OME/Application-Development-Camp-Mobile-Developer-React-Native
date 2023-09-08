import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import AboutUs from './components/about/aboutUs';
import MainNavbar from './components/layout/header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import ContactUs from './components/contact/contactUs';
import NotFound from './components/notFound/notFound';

function App() {
  return (
  <>
    <MainNavbar /> 
    <div className='container mt-4'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/contact" element={<ContactUs />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  </>
  );
}

export default App;
