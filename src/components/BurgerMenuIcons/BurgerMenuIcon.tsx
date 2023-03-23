import classNames from 'classnames'
import { FavouritesContext } from 'context/FavouritesProvider'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './BurgerMenuIcon.module.scss'
import { CartContext } from 'context/CartContext'

type Props = {
  setIsBurgerMenuOpen: (type: boolean) => void
  alt: string
  src: string
  to: string
}

export const BurgerMenuIcon: React.FC<Props> = ({ setIsBurgerMenuOpen, alt, src, to }) => {
  const { favourites } = useContext(FavouritesContext)
  const { cartItems: cart } = useContext(CartContext)

  const amount = to === '/favourites' ? favourites.length : cart.length

  return (
    <NavLink
      onClick={() => setIsBurgerMenuOpen(false)}
      className={({ isActive }) =>
        classNames(styles.burgerMenu_link, {
          [styles.activeLink]: isActive,
        })
      }
      to={to}
    >
      <div className={styles.icon_container}>
        <img className={styles.burgerMenu_icon} alt={alt} src={src} />
        {amount > 0 && <span className={styles.counter}>{amount}</span>}
      </div>
    </NavLink>
  )
}
