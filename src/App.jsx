import Navbar from './components/Navbar';
import Home from './Home.jsx';
import Skills from './Skills.jsx';
import Education from './Education.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Publications from './Publications.jsx';
import Achievements from './Achievements.jsx';
import Contact from './Contact.jsx';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-4 max-w-5xl mx-auto">
        <Home />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Publications />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
}

export default App;
