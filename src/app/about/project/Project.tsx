import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import style from "./project.module.css";

// Project
const Project = ({
  data,
}: {
  data: { title: string; description: string; github: string; url: string };
}) => {
  return (
    <a
      className={style.projectBox}
      href={data.github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{data.title}</span>
      <p>{data.description}</p>
      <div className={style.projectLinks}>
        <div>
          <FaGithub />
        </div>
      </div>
    </a>
  );
};

export default Project;
