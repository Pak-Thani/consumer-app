import Logo from '../public/logo.png'
import Image from 'next/image'
import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import { useState } from 'react'

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    return (
        <div className='top' padding="20%" >
            <div className="container"/>
                <div className={styles.Logo}>
                    <Image src={Logo} />  
                </div>
                <nav className="navbar">
                    <div className={styles.containerfluid}>
                        <div className={styles.displaynyasisearchdanburger}>
                            <form className="d-flex" role="search">
                                <input className={styles.search} placeholder="Pencarian" type="search" aria-label="Search"/>
                                <div className={styles.Iconsearch}>
                                    <svg width="15" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img" viewBox="0 0 24 24">
                                        <title>Search</title>
                                        <circle cx="11.5" cy="10.5" r="5.5"/>
                                        <path d="M21 21l-5.2-5.2"/>
                                    </svg>
                                </div>
                            </form>
                                <button className={isOpen === false ? 
                                                styles.burgernavbar : styles.burgernavbar+' '+styles.active}
                                                onClick={openMenu}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                        </div>
                                <ul className={isOpen === false ? 
                                            styles.navmenu : styles.navmenu +' '+ styles.active}>
                                    <li className={styles.navitem}>
                                        <Link href="/AlamatSaya">
                                            <a className={isOpen === false ?
                                                        styles.navlink : styles.navlink+' '+styles.active}
                                                        onClick={openMenu}>Alamat Saya</a>
                                        </Link>
                                    </li> 
                                    <li className={styles.navitem}> 
                                        <Link href="/Kategori">
                                            <a className={isOpen === false ?
                                                        styles.navlink : styles.navlink+' '+styles.active}
                                                        onClick={openMenu}>Kategori</a>
                                        </Link>
                                    </li> 
                                    <li className={styles.navitem}>
                                        <Link href="/Keluar">
                                            <a className={isOpen === false ?
                                                        styles.navlink : styles.navlink+' '+styles.active}
                                                        onClick={openMenu}>Keluar</a>
                                        </Link>
                                    </li>
                                    <li className={styles.navitem}>  
                                        <Link href="/Keranjang">
                                            <a className={isOpen === false ?
                                                        styles.navlink : styles.navlink+' '+styles.active}
                                                        onClick={openMenu}>Keranjang</a>
                                        </Link>
                                    </li>  
                                    <li className={styles.navitem}>
                                        <Link href="/ListTransaksi">
                                            <a className={isOpen === false ?
                                                        styles.navlink : styles.navlink+' '+styles.active}
                                                        onClick={openMenu}>ListTransaksi</a>
                                        </Link>
                                    </li>       
                                </ul>
                    </div>
                </nav>
                    
            </div>
            
      );
}
export default Nav;