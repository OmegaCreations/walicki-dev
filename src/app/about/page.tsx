import style from "./about.module.css";

// AboutPage
const AboutPage: React.FC = () => {
  return (
    <div className={`container ${style.aboutBox}`}>
      <div className={style.aboutHeader}>
        <h1>Maksymilian Walicki</h1>
        <h2>Your Fullstack Web Developer</h2>
        <span>
          Since beginning my journey as a freelance designer 12 years ago,
          I&apos;ve done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I&apos;m quietly confident, naturally
          curious, and perpetually working on improving my chops.
        </span>
      </div>

      <section>
        <h3>Stack</h3>
      </section>
      <section>
        <h3>Projects</h3>
      </section>
      <section>
        <h3>Experience</h3>
      </section>
      <section>
        <h3>Education</h3>
      </section>
      <section>
        <h3>Soft Skills</h3>
      </section>
    </div>
  );
};

export default AboutPage;
