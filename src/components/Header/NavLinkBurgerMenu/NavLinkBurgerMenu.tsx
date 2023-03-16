import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import styles from './NavLinkBurgerMenu.module.scss'

type Props = {
  to: string
  title: string
}

export const NavLinkBurgerMenu: React.FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(styles.burgerMenu_navLink, {
        [styles.activeLink]: isActive,
      })
    }
  >
    {title}
  </NavLink>
)
