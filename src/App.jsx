import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Education from './sections/Education';

const App = () => {
  return (
    <div>
      <Hero />
      <Navbar />
      <Skills />
      <Education />
    </div>
  );
};

export default App;
