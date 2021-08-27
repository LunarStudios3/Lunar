import logo from './logo.svg';
import './App.css';
import Menu from './components/Navbar'
import Landing from './components/Landing'
function App() {
  return (
    <div className="App">
       <Menu />
      <header className="App-header">
        <Landing />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
