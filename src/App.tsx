import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Contact from './sections/contact';
import Experience from './sections/experience';
import Landing from './sections/landing';
import Projects from './sections/projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Experience />
      <Projects />
      <Contact />
      <Footer className="footer" />
    </div>
  );
}

export default App;
