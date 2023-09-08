
import './App.css';
import MainNavBar from './component/layout/navbar/navbar';
import MainFooter from './component/layout/footer/footer';
import { Routes ,Route} from 'react-router-dom';
import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import News from './pages/news/news';
import SingleArticle from './pages/singelArticle/singleArticle';
import { CounterProvider } from './context/counterContext';
import { useState } from 'react';
import CounterPage from './pages/counter/counter';
import { LangProvider } from './context/langContext';
import Account from './pages/account/account';
import AccountGard from './pages/account/accountGard';

function App() {
//   const lang = useSelector((state)=>state.lang.lang)
  const [counter,setCounter]=useState(0)
  const [lang,setLang]=useState("en")
  return (
   <>
<div dir={`${lang==='en'?'ltr':'rtl'}`}>
<LangProvider value={{lang,setLang}}>
<CounterProvider value={{counter,setCounter}}>
<MainNavBar/>
   <Container className='my-5'>
   <Routes>
   <Route path="/"    element={<HomePage />}/>
   <Route path="/about"    element={<AboutPage />}/>
   <Route path="/news"    element={<News />}/>
   <Route path="/account"    element={<AccountGard />}/>
   <Route path="/news/:title"    element={<SingleArticle />}/>
   <Route path="/counter"    element={<CounterPage />}/>
   </Routes>
   </Container>
   <MainFooter/>
</CounterProvider>
</LangProvider>
</div>
   </>
  );
}

export default App;
