import Projects from './sections/Projects/Projects';
import './App.css';
import NavBar from './sections/NavBar/NavBar';
import Footer from './sections/Footer/Footer';
import Skills from './sections/Skills/Skills';

function ProjectsPage() {
  return (
    <>
      <NavBar />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default ProjectsPage;
