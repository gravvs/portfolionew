import './styles/themes/default/theme.scss'
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from './components/Projects';
import Technology from './components/Technology';
import Footer from './components/Footer';
import Client from './components/Client';


function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Projects />
      <Technology />
      <Client />
      <Footer />
    </div>
  );
}

export default App;
