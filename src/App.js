import './styles/themes/default/theme.scss'
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from './components/Projects';
import Technology from './components/Technology';


function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Projects />
      <Technology />
    </div>
  );
}

export default App;
