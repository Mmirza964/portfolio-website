import styles from './HeroStyles.module.css';
import heroImg from '../../assets/MatthewMirzaHeroDark.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import resume from '../../assets/Matthew Mirza Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Matthew Mirza"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Matthew <br /> Mirza
        </h1>
        <h2>Computer Science Student</h2>
        <span>
          <a href="https://github.com/Mmirza964" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-mirza-6a9264218/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for data science and software development
        </p>
        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
