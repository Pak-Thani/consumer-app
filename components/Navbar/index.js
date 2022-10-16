import Logo from "../../public/images/logo.png";
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
          <Image src={Logo} />
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
              className={`${styles.burgerNav} ${isOpen ? styles.active : ""}`}
              onClick={openMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Tutup
              </a>
            </li>
            <li className={styles.navitem}>
              <Link href="/Kategori">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Kategori
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/ListTransaksi">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  List Transaksi
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/Keranjang">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Keranjang
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/AlamatSaya">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Alamat Saya
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/Keluar">
                <a
                  className={
                    isOpen === false
                      ? styles.navlinkKeluar
                      : styles.navlinkKeluar + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Keluar
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
