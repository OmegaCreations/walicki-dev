"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

// Links
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Links: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="container">
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}{" "}
      </div>
      <button onClick={() => setOpen((prev) => !prev)}>menu</button>
      {open && (
        <div className="mobileLinks">
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
