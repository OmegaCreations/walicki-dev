import CircleBg from "@/components/circleBg/CircleBg";
import style from "./contact.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

// ContactPage
const ContactPage: React.FC = () => {
  return (
    <div
      className={` ${style.contact} flex flex-col justify-center gap-6 mt-8 overflow-hidden`}
    >
      <h1 className="text-[6em] relative font-black tracking-widest">
        CONTACT
      </h1>
      {/* Socials container */}
      <div className="container flex flex-col gap-6">
        <a
          href="https://www.linkedin.com/in/maksymilian-walicki/"
          className={style.contactBox}
        >
          LinkedIn <FaExternalLinkAlt />
        </a>
        <a className={style.contactBox}>
          Mail <FaExternalLinkAlt />
        </a>
        <a
          href="https://github.com/OmegaCreations"
          className={style.contactBox}
        >
          Github <FaExternalLinkAlt />
        </a>
      </div>
      <CircleBg />
    </div>
  );
};

export default ContactPage;
