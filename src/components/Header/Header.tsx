import { NavLink } from 'react-router-dom';
import React from 'react';
import './Header.modules.css';
import { NavLinkBar } from './NavLinkBar';
import logoFavouriteIcon from '../../images/favouriteIcon.svg';
import mainLogo from '../../images/mainLogo.svg';
import logoBagIcon from '../../images/Shoppingbag.svg';
import burgerMenuIcon from '../../images/burger-menu.svg';
/* eslint-disable max-len */

export const Header: React.FC = () => (
  <header className="header">
    <div className="header_container">
      <div className="navigation_container">
        <NavLink to="/" className="header_logo_link">
          <img
            className="header_logo"
            alt="Main Logo"
            src={mainLogo}
          />
        </NavLink>
        <nav className="header_navigation">
          <ul className="navList">
            <li className="navLinkWrapper">
              <NavLinkBar to="/" title="Home" />
            </li>
            <li className="navLinkWrapper">
              <NavLinkBar to="/Phones" title="Phones" />
            </li>
            <li className="navLinkWrapper">
              <NavLinkBar to="/Tablets" title="Tablets" />
            </li>
            <li className="navLinkWrapper">
              <NavLinkBar to="/Accesories" title="Accesories" />
            </li>
          </ul>
        </nav>
      </div>
      <div className="header_menu">
        <NavLink className="header_favourite_link" to="/Favourites">
          <img
            className="header_favourite_icon"
            alt="Favourite icon"
            src={logoFavouriteIcon}
          />
        </NavLink>
        <NavLink className="header_shopping-bag_link" to="/Shopping-bag">
          <img
            className="header_shopping-bag_icon"
            alt="Shopping Bag icon"
            src={logoBagIcon}
          />
        </NavLink>
        <NavLink className="header_burger-menu_link" to="/Burger-menu">
          <img
            className="header_burger-menu_icon"
            alt="Shopping Bag icon"
            src={burgerMenuIcon}
          />
        </NavLink>
      </div>
    </div>
  </header>
);
