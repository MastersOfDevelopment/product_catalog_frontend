import { NavLink } from 'react-router-dom';
import './Header.modules.css';
import React from 'react';
import { NavLinkBar } from './NavLinkBar';
import logoFavouriteIcon from '../../images/favouriteIcon.svg';
import mainLogo from '../../images/mainLogo.svg';
import logoBagIcon from '../../images/Shoppingbag.svg';
/* eslint-disable max-len */

export const Header: React.FC = () => (
  <header className="header">
    <div className="header_container">
      <div className="navigation_container">
        <NavLink to="/">
          <img
            className="header_logo"
            alt="Main Logo"
            src={mainLogo}
          />
        </NavLink>
        <nav className="header_navigation">
          <NavLinkBar to="/" title="Home" />
          <NavLinkBar to="/Phones" title="Phones" />
          <NavLinkBar to="/Tablets" title="Tablets" />
          <NavLinkBar to="/Accesories" title="Accesories" />
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
      </div>
    </div>
  </header>
);
