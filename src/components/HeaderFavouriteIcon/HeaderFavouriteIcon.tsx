/* eslint-disable import/no-unresolved */
import classnames from 'classnames'
import { FavouritesContext } from 'context/FavouritesProvider'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './HeaderFavouriteIcon.module.scss'
import logoFavouriteIcon from 'assets/icons/favourites.svg'

export const HeaderFavouriteIcon: React.FC = () => {
  const { favourites } = useContext(FavouritesContext)

  return (
    <div className={styles.container}>
      <NavLink
        className={({ isActive }) =>
          classnames(styles.favourite_link, {
            [styles.activeLink]: isActive,
          })
        }
        to="/favourites"
      >
        <div className={styles.icon_container}>
          <img className={styles.favourite_icon} alt="Favourite icon" src={logoFavouriteIcon} />
          {favourites.length > 0 && <span className={styles.counter}>{favourites.length}</span>}
        </div>
      </NavLink>
    </div>
  )
}
