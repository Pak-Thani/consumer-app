import newLogo from "../../public/images/newlogo.png";
import Search from "../../public/images/search.svg";
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <div className="top">
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <Image src={newLogo} />
        </div>
      </div>
      <nav>
        <div className={styles.containerNav}>
          <div className={styles.searchWithBurger}>
            <input
              className={`${styles.search} ${isOpen ? styles.active : ""}`}
              placeholder="Pencarian"
              type="search"
              aria-label="Search"
            />
            <div
              className={`${styles.Iconsearch} ${isOpen ? styles.active : ""}`}
            >
              <Search />
            </div>
            <div
              className={`${styles.burgerNavWrapper} ${
                isOpen ? styles.active : ""
              }`}
            >
              <div className={styles.burgerNavClose} onClick={openMenu}>
                <div
                  className={`${styles.burgerNav} ${
                    isOpen ? styles.active : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.burgerNavLink}>Tutup</div>
              </div>
              <div className={styles.burgerNavLinkGroup}>
                <div>
                  <Link href="/catalog">
                    Kategori
                  </Link>
                </div>
                <div>Keranjang</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
