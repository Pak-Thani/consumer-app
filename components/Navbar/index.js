import newLogo from "../../public/images/newlogo.png";
import Search from "../../public/images/search.svg";
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { Context } from "../../context/AppContext";

const Navbar = () => {
  const route = useRouter();
  const {
    search,
    setSearch,
    handleSearch,
    handleSubmitSearch,
    openMenu,
    isOpen,
    setIsOpen,
  } = useContext(Context);
  // console.log(search);
  // const [isOpen, setIsOpen] = useState(false);
  // const openMenu = () => setIsOpen(!isOpen);
  return (
    <div className="top">
      <div className={styles.logoWrapper}>
        <div className={styles.logo} onClick={() => route.push("/")}>
          <Image src={newLogo} />
        </div>
      </div>
      <nav>
        <div className={styles.containerNav}>
          <div className={styles.searchWithBurger}>
            <form onSubmit={handleSubmitSearch}>
              <input
                className={`${styles.search} ${isOpen ? styles.active : ""}`}
                placeholder="Pencarian"
                type="search"
                // name="search"
                // aria-label="Search"
                onChange={handleSearch}
                value={search}
              />
            </form>
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
                  <Link href="/catalog">Kategori</Link>
                </div>
                <div>
                  <Link href="/cart">Keranjang</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
