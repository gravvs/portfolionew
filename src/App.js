import './styles/themes/default/theme.scss'
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from './components/Projects';
import Technology from './components/Technology';
import Footer from './components/Footer';
import Client from './components/Client';
import Categories from './components/Categories';
import Hamburger from './components/Hamburger'
import { useRef, useState } from 'react';

function App() {
  const [show, setShow] = useState(false)
  const refMain = useRef(null);
  const refCategories = useRef(null);
  const refTech = useRef(null);
  const refContact = useRef(null);
  
  return (
    <div className="app">
      <Header {...{refMain,refCategories,refTech,refContact,show,setShow}}/>
      <Hamburger show={show}/>
      <Main refMain={refMain}/>
      <Categories refCategories={refCategories}/>
      <Projects refMain={refMain}/>
      <Technology refTech={refTech}/>
      <Client refContact={refContact}/>
      <Footer />
    </div>
  );
}

export default App;
