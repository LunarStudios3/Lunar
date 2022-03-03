import "./App.css"
import Menu from './components/Navbar'
import Landing from './components/Landing'
import TopAbout from './components/TopAbout'
import About from './components/About'
import TopTeam from './components/TopTeam'
import Team from './components/Team'
import Reviews from './components/Reviews'
import Portfolio from './components/Portfolio'


function App() {
  return (
    <div className="App">
       <Menu />
       <Landing />
       <TopAbout />
       <About />
       <TopTeam />
       <Team />
       <Reviews />
       <Portfolio />

      <header >
   
      </header>
    </div>
  );
}

export default App;
