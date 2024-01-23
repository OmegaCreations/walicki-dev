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
          <div className={styles.linkItem} key={link.title}>
            <NavLink item={link} />
          </div>
        ))}{" "}
      </div>
      <button onClick={() => setOpen((prev) => !prev)}>menu</button>
      {open && (
        <div className="mobileLinks">
          {links.map((link) => (
            <div className={styles.linkItem} key={link.title}>
              <NavLink item={link} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
