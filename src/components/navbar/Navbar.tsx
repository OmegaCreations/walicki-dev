import Links from "./links/Links";
import styles from "./navbar.module.css";

// Navbar
const Navbar: React.FC = () => {
  return (
    <div
      className={`flex-col gap-4 justify-center sm:justify-between sm:flex-row ${styles.navbar}`}
    >
      <div className="font-normal">@WalickiDev</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
