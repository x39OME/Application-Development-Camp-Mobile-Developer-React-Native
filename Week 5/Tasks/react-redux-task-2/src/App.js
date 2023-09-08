import './App.css';
import MainNavBar from './component/layout/navbar/navbar';
import MainFooter from './component/layout/footer/footer';
import { Routes ,Route} from 'react-router-dom';
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import ContactPage from './pages/contact/contact';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function App() {
  const lang=useSelector((state)=>state.lang);
  return (
   <>
<div dir={`${lang==='en'?'ltr':'rtl'}`}>
<MainNavBar/>
   <Container className='my-5'>
   <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/contact" element={<ContactPage />}/>
   </Routes>
   </Container>
   <MainFooter/>
</div>
   </>
  );
}

export default App;
