/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import styles from '../Header.module.scss'

type Props = {
  to: string
  title: string
}

export const NavLinkBar: React.FC<Props> = ({ to, title }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(styles.navLink, {
        [styles.activeLink]: isActive,
      })
    }
  >
    {title}
  </NavLink>
)
