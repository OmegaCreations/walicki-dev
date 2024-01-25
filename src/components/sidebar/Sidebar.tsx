import style from "./sidebar.module.css";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Sidebar
const Sidebar: React.FC = () => {
  const getMail = async () => {
    try {
      await navigator.clipboard.writeText("maxwalicki@gmail.com").then(() => {
        toast("Copied mail to clipboard!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "dark",
        });
      });
    } catch (err) {
      toast("An error occured while copying", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
      });
    }
  };

  return (
    <div className={style.sideBar}>
      <a href="https://www.linkedin.com/in/maksymilian-walicki/">
        <FaLinkedin />
      </a>
      <a onClick={getMail}>
        <MdEmail />
      </a>
      <a href="https://github.com/OmegaCreations">
        <FaGithub />
      </a>
      <ToastContainer />
    </div>
  );
};

export default Sidebar;
