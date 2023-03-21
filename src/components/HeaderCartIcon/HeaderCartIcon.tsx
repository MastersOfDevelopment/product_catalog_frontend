/* eslint-disable import/no-unresolved */
import classnames from 'classnames'
import { ProductsContext } from 'context/ProductsProvider'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './HeaderCartIcon.module.scss'
import logoBagIcon from 'assets/icons/shopping-bag.svg'

export const HeaderCartIcon: React.FC = () => {
  const { cart } = useContext(ProductsContext)

  return (
    <div className={styles.container}>
      <NavLink
        className={({ isActive }) =>
          classnames(styles.shoppingbag_link, {
            [styles.activeLink]: isActive,
          })
        }
        to="/cart"
      >
        <div className={styles.icon_container}>
          <img className={styles.shoppingbag_icon} alt="Shopping Bag icon" src={logoBagIcon} />
          {cart.length > 0 && <span className={styles.counter}>{cart.length}</span>}
        </div>
      </NavLink>
    </div>
  )
}
