import style from "./about.module.css";
import Image from "next/image";
import Project from "./project/Project";
import CircleBg from "@/components/circleBg/CircleBg";
import Experience from "./experience/Experience";

// AboutPage
const AboutPage: React.FC = () => {
  const projects = [
    {
      title: "Airplane Captive Portal with Bandwidth Limiting",
      description:
        "Project implements technology seen while flying on airplanes. It allows internet connection based on chosen bundle with different bandwidth and prices for a specific period of time.",
      github: "https://github.com/OmegaCreations/Airplane-CaptivePortal-BandwidthLimiting",
      url: "",
    },
    {
      title: "C++ Chat App",
      description:
        "Chat application made in C++ featuring multithreaded Server-Client chat rooms with Winsock2 library. User interface made with WxWidgets.",
      github: "https://github.com/OmegaCreations/CppNetworking",
      url: "",
    },
    {
      title: "Jake",
      description:
        "Fullstack application featuring full user authentication with spring security and custom MongoDB cluster. Whole project showcases full data flow and connections. React Web App featuring custom snake colors, and Java desktop game - both connected to Spring Boot backend server.",
      github: "https://github.com/OmegaCreations/FrontendJake",
      url: "",
    },
    {
      title: "GiardDesign",
      description:
        "Portfolio website for gardening services built in clean JS and Tailwind.",
      github: "https://github.com/OmegaCreations/GiardDesign-LandingPage",
      url: "https://omegacreations.github.io/GiardDesign-LandingPage/public/index.html",
    },
    {
      title: "PartyMeet",
      description:
        "Web App landing page with newsletter functionality. Built with Vite in React.js, Typescript and Tailwind.",
      github: "https://github.com/OmegaCreations/PartyMeet-LandingPage",
      url: "",
    },
    {
      title: "SSPvEth",
      description:
        "AI project featuring streaming provider for ethernet data transmission sent by Raspberry Pico filtering visual data with AI model. Built with Node.js, Express.js, Python and Tensorflow library. ",
      github:
        "https://github.com/OmegaCreations/StreamingService-for-Ethernet-Data",
      url: "",
    },
  ];

  const jobs = [
    {
      title: "ICT Technician Apprentice",
      date: "Salamanca, Spain",
      description:
        "Developed and secured local network inside of local school with a team.",
    },
    {
      title: "Frontend Developer Apprentice",
      date: "Quantoo, Cracow",
      description:
        "Developed landing pages in CSS and Sass. Used knowledge of JavaScript and JQuery to create templates in Wordpress and PHP.",
    },
  ];

  return (
    <div className={`container ${style.aboutBox}`}>
      <div className={style.aboutHeader}>
        <h1 className="text-[2em] sm:text-[3em]">Maksymilian Walicki</h1>
        <h2>Your Fullstack Web Developer</h2>
        <span>
          Hi, My name is Maksymilian. I am an <b>ICT Technician</b> currently
          pursuing degree in <b>Applied Computer Science at AGH in Cracow, Poland</b>. I
          love working with complex problems and creating web applications. <b>I am
          currently working on a Gym RPG app.</b> It uses React.js, Chakra UI, Spring framework and PostgreSQL. Contact me if you are interested to see source code for hiring purposes.
        </span>
      </div>

      <section className={style.stack}>
        <h3>Stack</h3>
        <hr></hr>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className={style.imgBox}>
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/react-original-wordmark.svg"
                alt="React"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/javascript-original.svg"
                alt="Javascript"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/typescript-original.svg"
                alt="Typescript"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/html5-original-wordmark.svg"
                alt="HTML"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/css3-original-wordmark.svg"
                alt="Css"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/sass-original.svg"
                alt="Sass"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Frontend/tailwindcss-icon.svg"
                alt="Tailwindcss"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/springio-icon.svg"
                alt="Spring"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Backend/nodejs-original-wordmark.svg"
                alt="NodeJs"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Database/mongodb-original-wordmark.svg"
                alt="Mongodb"
                width="40"
                height="40"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className={style.imgBox}>
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Software/photoshop-line.svg"
                alt="Photoshop"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Software/figma-icon.svg"
                alt="Figma"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/git-scm-icon.svg"
                alt="Git"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Other/linux-original.svg"
                alt="Linux"
                width="40"
                height="40"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className={style.imgBox}>
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/c-original.svg"
                alt="C"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/cplusplus-original.svg"
                alt="CPP"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/java-original.svg"
                alt="Java"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/Languages/python-original.svg"
                alt="Python"
                width="40"
                height="40"
              />
              <Image
                src="https://raw.githubusercontent.com/teamedwardforever/Readme-Generator/71f25dd8b98329b168142a6b782a107b75eab178/svg/Skills/ML/tensorflow-icon.svg"
                alt="Tensorflow"
                width="40"
                height="40"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={style.projects}>
        <h3>Projects</h3>
        <hr></hr>
        <div className="flex flex-col gap-18">
          {projects.map((data) => (
            <Project data={data} key={data.title} />
          ))}
        </div>
      </section>
      <section className={style.projects}>
        <h3>Experience</h3>
        <hr></hr>
        <div className="flex flex-col gap-18">
          {jobs.map((data) => (
            <Experience data={data} key={data.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
