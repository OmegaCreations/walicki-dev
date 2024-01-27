"use client";

import CircleBg from "@/components/circleBg/CircleBg";
import style from "./contact.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

// ContactPage
const ContactPage: React.FC = () => {
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
    <div
      className={` ${style.contact} flex flex-col justify-center gap-6 mt-8 overflow-hidden`}
    >
      <h1 className="text-[3em] sm:text-[6em] relative font-black tracking-widest">
        CONTACT
      </h1>
      {/* Socials container */}
      <div className="container flex flex-col gap-6">
        <a
          href="https://www.linkedin.com/in/maksymilian-walicki/"
          className={`text-[2em] sm:text-[4em] ${style.contactBox}`}
        >
          LinkedIn <FaExternalLinkAlt />
        </a>
        <a
          onClick={getMail}
          className={`text-[2em] sm:text-[4em] ${style.contactBox}`}
        >
          Mail <FaRegCopy />
        </a>
        <a
          href="https://github.com/OmegaCreations"
          className={`text-[2em] sm:text-[4em] ${style.contactBox}`}
        >
          Github <FaExternalLinkAlt />
        </a>
      </div>
      <CircleBg />
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
