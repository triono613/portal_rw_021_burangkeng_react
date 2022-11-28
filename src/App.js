
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import About from './components/About';
// import Blog from './components/Blog';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
// import Home from './components/Home';
import Menu from './components/Menu';
import Modal from './components/Modal';
// import Work from './components/Work';
// import Modal from './components/Modal';


function App() {
  return (
    <>
    <Header />
    <Menu />  
    <Home />
    <About />
    <Blog />
    <Contact />
    <Footer />
    <Modal />
    </>
    
  );
}

export default App;
