import React from 'react'
import { useLocation } from 'react-router'
import styles from './BreadCrumbs.module.scss'
import HomeLogo from 'assets/icons/home.svg'
import ArrowRight from 'assets/icons/arrow-right.svg'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'

export const BreadCrumbs: React.FC = () => {
  const location = useLocation()
    .pathname.split('/')
    .filter((item) => item !== '')
    .map((word) => word[0].toUpperCase() + word.slice(1))

  return (
    <div className={styles.container}>
      <NavLink to={'/'} className={styles.home_icon}>
        <img src={HomeLogo} alt="home_logo" />
      </NavLink>
      {location.map((path) => {
        const lowerPath = path.toLowerCase()

        return (
          <div className={styles.path_container}>
            <img className={styles.arrow} src={ArrowRight} alt="arrow-right" />
            <NavLink
              to={'/' + lowerPath}
              className={({ isActive }) =>
                classnames(styles.link, {
                  [styles.link_active]: isActive,
                })
              }
            >
              {path}
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}
