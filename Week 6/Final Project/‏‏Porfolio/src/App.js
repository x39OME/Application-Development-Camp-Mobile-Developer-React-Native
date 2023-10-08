import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import MainNavbar from './components/layout/navbar/navbar';
import Home from './components/home/home';
import MainFooter from './components/layout/footer/footer';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Gallery from './components/gallery/gallery';
import Photos from './components/photos/photos';
import Contact from './components/contact/contact';
// eslint-disable-next-line
import NotFound from './components/notFound/notFound';

function App() {
  return ( 
  <>
        <MainNavbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Gallery />
        <Photos />
        <Contact />
        <MainFooter />
  </>

  );
}

export default App;
