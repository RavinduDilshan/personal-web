import React from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
   <nav className={styles.navbar}>
    <a className={styles.title} href="/">Ravindu Dilshan</a>
    <div className={styles.menu}>
      <ul className={styles.menuItems}>
    <li>
        <a href="">Projects</a>
    </li>
    <li>
        <a href="">Experience</a>
    </li>
      </ul>
    </div>
   </nav>
  )
}
