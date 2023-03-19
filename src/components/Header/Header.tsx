import { NavLink } from 'react-router-dom'
import React from 'react'
import styles from './Header.module.scss'
import { NavLinkBar } from 'components/NavLinkBar'
import logoBagIcon from 'assets/icons/shopping-bag.svg'
import burgerMenuIcon from 'assets/icons/burger-menu.svg'
import { HeaderLogo } from '../HeaderLogo'
import { BurgerMenuButton } from 'components/buttons/BurgerMenuButton'
import classNames from 'classnames'
import { HeaderFavouriteIcon } from 'components/HeaderFavouriteIcon'

type Props = {
  setIsBurgerMenuOpen: (type: boolean) => void
}

export const Header: React.FC<Props> = ({ setIsBurgerMenuOpen }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.navigation_container}>
          <HeaderLogo />
          <nav className={styles.header_navigation}>
            <ul className={styles.navList}>
              <li className={styles.navLinkWrapper}>
                <NavLinkBar to="/" title="Home" />
              </li>
              <li className={styles.navLinkWrapper}>
                <NavLinkBar to="/phones" title="phones" />
              </li>
              <li className={styles.navLinkWrapper}>
                <NavLinkBar to="/tablets" title="tablets" />
              </li>
              <li className={styles.navLinkWrapper}>
                <NavLinkBar to="/accesories" title="accesories" />
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.header_menu}>
          <HeaderFavouriteIcon />
          <NavLink
            className={({ isActive }) =>
              classNames(styles.header_shoppingbag_link, {
                [styles.activeLink]: isActive,
              })
            }
            to="/cart"
          >
            <img className={styles.header_shoppingbag_icon} alt="Shopping Bag icon" src={logoBagIcon} />
          </NavLink>
          <BurgerMenuButton setIsBurgerMenuOpen={setIsBurgerMenuOpen} image={burgerMenuIcon} type={true} />
        </div>
      </div>
    </header>
  )
}
