import ProjectCard from '../../common/ProjectCard';
import styles from './ProjectsStyles.module.css';
import stockGraph from '../../assets/stock-graph.png';
import minesweeper from '../../assets/minesweeper.png';
import lightEmAll from '../../assets/light-em-all.png';
import portfolioWebsite from '../../assets/portfolio-website.png';
import webChatApp from '../../assets/web-chat-icon.png';
import husky from '../../assets/husky-hacks.jpg';
import cookbook from '../../assets/cookbook.jpg';
import limo from '../../assets/limo.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={limo}
          link="https://github.com/Mmirza964/mr-speed-app"
          h3="Mr. Speed App"
          p="Clikc image for Code"
        />
        <ProjectCard
          src={webChatApp}
          link="https://github.com/Mmirza964/web-chat-app"
          h3="Web Chat App"
          p="Click Image for Code"
        />
        <ProjectCard
          src={husky}
          link="https://github.com/Mmirza964/Husky-Hacks"
          h3="Husky Hacks"
          p="Click Image for Code"
        />
        <ProjectCard
          src={cookbook}
          link="https://github.com/Mmirza964/Recipe-Warehouse"
          h3="Recipe Warehouse"
          p="Click Image for Code"
        />
        <ProjectCard
          src={portfolioWebsite}
          link="https://github.com/Mmirza964/portfolio-website"
          h3="Portfolio Website"
          p="Click Image for Code"
        />
        <ProjectCard
          src={stockGraph}
          link="https://github.com/Mmirza964/mock-stock-portfolio"
          h3="Mock Stock Portfolio"
          p="Click Image for Code"
        />
        <ProjectCard
          src={minesweeper}
          link="https://github.com/Mmirza964/minesweeper"
          h3="Minesweeper"
          p="Click Image for Code"
        />
        <ProjectCard
          src={lightEmAll}
          link="https://github.com/Mmirza964/light-em-all"
          h3="LightEmAll"
          p="Click Image for Code"
        />
      </div>
    </section>
  );
}

export default Projects;
