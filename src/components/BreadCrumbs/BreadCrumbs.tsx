import React from 'react'
import { useLocation } from 'react-router'
import styles from './BreadCrumbs.module.scss'
import HomeLogo from '../../assets/icons/home.svg'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import ArrowRight from 'assets/icons/arrow-right.svg'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'

export const BreadCrumbs: React.FC = () => {
  const routes = [
    {
      path: '/home',
    },
  ]

  const breadcrumbs = useBreadcrumbs(routes, { excludePaths: ['/', '/home'] })
  const location = useLocation()

  return (
    <div className={styles.container}>
      <NavLink to={'/'} className={styles.home_icon}>
        <img src={HomeLogo} alt="home_logo" />
      </NavLink>
      {breadcrumbs.map(({ match, breadcrumb }) => {
        return (
          <div className={styles.path_container}>
            <React.Fragment key={match.pathname}>
              <img className={styles.arrow} src={ArrowRight} alt="arrow-right" />
              <NavLink
                key={match.pathname}
                to={match.pathname}
                className={classnames(styles.link, {
                  [styles.link_active]: match.pathname !== location.pathname,
                })}
              >
                {breadcrumb}
              </NavLink>
            </React.Fragment>
          </div>
        )
      })}
    </div>
  )
}
