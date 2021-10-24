import './styles/themes/default/theme.scss'
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from './components/Projects';
import Technology from './components/Technology';
import Footer from './components/Footer';
import Client from './components/Client';
import Categories from './components/Categories';
import { useRef } from 'react';

function App() {
  const refMain = useRef(null);
  return (
    <div className="app">
      <Header />
      <Main refMain={refMain}/>
      <Categories />
      <Projects refMain={refMain}/>
      <Technology />
      <Client />
      <Footer />
    </div>
  );
}

export default App;
