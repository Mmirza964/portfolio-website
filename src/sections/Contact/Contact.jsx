import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.bio}>
        <h1>Bio</h1>
        <p>
          Matthew Mirza <br />
          (508)-808-9172 <br />
          mathewfmirza@gmail.com <br />
          mirza.ma@northeastern.com
        </p>
      </div>
      <h1 className="sectionTitle">Contact Form</h1>
      <form action="https://formspree.io/f/mldrzdjo" method="post">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
