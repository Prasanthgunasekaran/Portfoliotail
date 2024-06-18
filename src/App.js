import './App.css';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Resume from './Resume';

function App() {
  return (

    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
