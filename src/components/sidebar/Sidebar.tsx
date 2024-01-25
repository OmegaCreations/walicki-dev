import style from "./sidebar.module.css";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

// Sidebar
const Sidebar: React.FC = () => {
  return (
    <div className={style.sideBar}>
      <a href="https://www.linkedin.com/in/maksymilian-walicki/">
        <FaLinkedin />
      </a>
      <a>
        <MdEmail />
      </a>
      <a href="https://github.com/OmegaCreations">
        <FaGithub />
      </a>
    </div>
  );
};

export default Sidebar;
