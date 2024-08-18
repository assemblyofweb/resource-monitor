import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { apiService } from '../../services/apiService';
import styles from '../../styles/NavBar.module.css';

const LogoExpendedImg = '/img/logo_e.png';
const LogoCollapsedImg = '/img/logo_c.png';
const MenuImg = '/img/menu.png';
const MenuXImg = '/img/menu_x.png';
const matrixImg = '/img/matrix.png';
const policyImg = '/img/policy.png';
const userImg = '/img/user.png';

import { useNavBarContext } from '../../context/NavBarContext';

const NavBar = () => {
  const { isOpen, toggleNavBar } = useNavBarContext();
  const [userInfo, setUserInfo] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    apiService.getUserInfo().then(data => {
      setUserInfo(data);
    });
  }, []);

  return (
    <div className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
      <div className={`${styles.logoContainer} ${isOpen ? styles.open : ''}`}>
        <img src={isOpen ? LogoExpendedImg : LogoCollapsedImg} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.navContent}>
        <ul className={styles.navList}>
          <li className={styles.navItem} onClick={toggleNavBar}>
            <a href="javascript:void(0)" className={styles.navLink}>
              <img src={isOpen ? MenuXImg : MenuImg} alt="Menu Toggle" className={styles.navIcon} />
              {isOpen && <span>Collapse Nav</span>}
            </a>
          </li>
          <li className={styles.navItem}>
            <Link href="/performance-metric" className={styles.navLink}>
              <img src={matrixImg} alt="Performance Metric" className={styles.navIcon} />
              {isOpen && <span>Performance Metric</span>}
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/edit-snapshot-policy" className={styles.navLink}>
              <img src={policyImg} alt="Edit Snapshot Policy" className={styles.navIcon} />
              {isOpen && <span>Edit Snapshot Policy</span>}
            </Link>
          </li>
        </ul>
        {isOpen ? (
          <div className={styles.userInfo}>
            <h5>{userInfo.name}</h5>
            <p>{userInfo.email}</p>
            <p>{userInfo.role}</p>
          </div>
        ) : (
          <div className={styles.userIconContainer} onClick={toggleNavBar}>
            <img src={userImg} alt={userInfo.name} className={styles.userIcon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
