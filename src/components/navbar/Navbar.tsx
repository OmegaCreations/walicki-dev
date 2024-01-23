import Links from "./links/Links";
import styles from "./navbar.module.css";

// Navbar
const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className="logo font-normal">@WalickiDev</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
