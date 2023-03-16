import { NavLink } from 'react-router-dom'
import React from 'react'
import styles from './Header.module.scss'
import { NavLinkBar } from './NavLinkBar'
import logoFavouriteIcon from 'assets/icons/favourites.svg'
import mainLogo from 'assets/icons/logo.svg'
import logoBagIcon from 'assets/icons/shopping-bag.svg'
import burgerMenuIcon from 'assets/icons/burger-menu.svg'
/* eslint-disable max-len */

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className="header_container">
      <div className="navigation_container">
        <NavLink to="/" className="header_logo_link">
          <img className="header_logo" alt="Main Logo" src={mainLogo} />
        </NavLink>
        <nav className="header_navigation">
          <ul className="navList">
            <li className="navLinkWrapper">
              <NavLinkBar to="/" title="Home" />
            </li>
            <li className="navLinkWrapper">
              <NavLinkBar to="/phones" title="phones" />
            </li>
            <li className="navLinkWrapper">
              <NavLinkBar to="/tablets" title="tablets" />
            </li>
            <li className="navLinkWrapper">
              <NavLinkBar to="/accesories" title="accesories" />
            </li>
          </ul>
        </nav>
      </div>
      <div className="header_menu">
        <NavLink className="header_favourite_link" to="/favourites">
          <img className="header_favourite_icon" alt="Favourite icon" src={logoFavouriteIcon} />
        </NavLink>
        <NavLink className="header_shopping-bag_link" to="/shopping-bag">
          <img className="header_shopping-bag_icon" alt="Shopping Bag icon" src={logoBagIcon} />
        </NavLink>
        <NavLink className="header_burger-menu_link" to="/burger-menu">
          <img className="header_burger-menu_icon" alt="Shopping Bag icon" src={burgerMenuIcon} />
        </NavLink>
      </div>
    </div>
  </header>
)
