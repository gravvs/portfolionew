import './styles/themes/default/theme.scss'
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from './components/Projects';
import Technology from './components/Technology';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Projects />
      <Technology />
      <Footer />
    </div>
  );
}

export default App;
