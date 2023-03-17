import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './BurgerMenuIcon.module.scss'

type Props = {
  setIsBurgerMenuOpen: (type: boolean) => void
  alt: string
  src: string
  to: string
}

export const BurgerMenuIcon: React.FC<Props> = ({ setIsBurgerMenuOpen, alt, src, to }) => (
  <NavLink
    onClick={() => setIsBurgerMenuOpen(false)}
    className={({ isActive }) =>
      classNames(styles.burgerMenu_link, {
        [styles.activeLink]: isActive,
      })
    }
    to={to}
  >
    <img className={styles.burgerMenu_icon} alt={alt} src={src} />
  </NavLink>
)
