import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import styles from './NavLinkBurgerMenu.module.scss'

type Props = {
  to: string
  title: string
  setIsBurgerMenuOpen: (type: boolean) => void
}

export const NavLinkBurgerMenu: React.FC<Props> = ({ to, title, setIsBurgerMenuOpen }) => (
  <li className={styles.burgerMenu_navLink_element}>
    <NavLink
      onClick={() => setIsBurgerMenuOpen(false)}
      to={to}
      className={({ isActive }) =>
        cn(styles.burgerMenu_navLink, {
          [styles.activeLink]: isActive,
        })
      }
    >
      {title}
    </NavLink>
  </li>
)
