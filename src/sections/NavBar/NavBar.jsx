import styles from './NavBar.module.css';

function NavBar() {
  return (
    <section className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLinks}>
          <a className={styles.navLink} href="../../../index.html">
            Home
          </a>
          <a className={styles.navLink} href="../../../Projects.html">
            Projects / Skills
          </a>
          <a className={styles.navLink} href="../../../Contact.html">
            Contact Me
          </a>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
