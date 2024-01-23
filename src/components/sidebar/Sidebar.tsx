import style from "./sidebar.module.css";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

// Sidebar
const Sidebar: React.FC = () => {
  return (
    <div className={style.sideBar}>
      <a>
        <FaLinkedin />
      </a>
      <a>
        <MdEmail />
      </a>
      <a>
        <FaGithub />
      </a>
    </div>
  );
};

export default Sidebar;
