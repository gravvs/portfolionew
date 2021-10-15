import './styles/themes/default/theme.scss'
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from './components/Projects';


function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Projects />
    </div>
  );
}

export default App;
