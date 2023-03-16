// import React from 'react'
import { HeaderLogo } from '../HeaderLogo'
import styles from './BurgerMenu.module.scss'
import closeBurgerMenu from 'assets/icons/close.svg'
import { NavLinkBurgerMenu } from '../NavLinkBurgerMenu'
import { NavLink } from 'react-router-dom'
import logoBagIcon from 'assets/icons/shopping-bag.svg'
import logoFavouriteIcon from 'assets/icons/favourites.svg'

export const BurgerMenu = () => (
  <>
    <div className={styles.burgerMenu_container}>
      <HeaderLogo />
      <div className={styles.burgerMenu_button_container}>
        <button className={styles.burgerMenu_button} onClick={() => history.back()}>
          <img className={styles.burgerMenu_close_image} alt="close menu" src={closeBurgerMenu} />
        </button>
      </div>
    </div>
    <nav className={styles.burgerMenu_navLink_wrapper}>
      <ul className={styles.burgerMenu_navList}>
        <li className={styles.burgerMenu_navLink_element}>
          <center>
            <NavLinkBurgerMenu to="/" title="Home" />
          </center>
        </li>
        <li className={styles.burgerMenu_navLink_element}>
          <center>
            <NavLinkBurgerMenu to="/phones" title="phones" />
          </center>
        </li>
        <li className={styles.burgerMenu_navLink_element}>
          <center>
            <NavLinkBurgerMenu to="/tablets" title="tablets" />
          </center>
        </li>
        <li className={styles.burgerMenu_navLink_element}>
          <center>
            <NavLinkBurgerMenu to="/accesories" title="accesories" />
          </center>
        </li>
      </ul>
    </nav>
    <div className={styles.burgerMenu_footer_container}>
      <NavLink className={styles.burgerMenu_link} to="/favourites">
        <img className={styles.burgerMenu_icon} alt="Shopping Bag icon" src={logoFavouriteIcon} />
      </NavLink>
      <NavLink className={styles.burgerMenu_link} to="/shopping-bag">
        <img className={styles.burgerMenu_icon} alt="Shopping Bag icon" src={logoBagIcon} />
      </NavLink>
    </div>
  </>
)
