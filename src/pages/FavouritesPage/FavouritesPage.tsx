/* eslint-disable import/no-unresolved */
import { BreadCrumbs } from 'components/BreadCrumbs'
import { ProductList } from 'components/ProductList'
import { FavouritesContext } from 'context/FavouritesProvider'
import React, { useContext } from 'react'
import styles from './FavouritesPage.module.scss'

export const FavouritesPage: React.FC = () => {
  const { favourites } = useContext(FavouritesContext)

  return (
    <div className={styles.main}>
      <BreadCrumbs />
      <h1 className={styles.title}>Favourites</h1>
      <p className={styles.subtitle}>
        {favourites.length === 1 ? `${favourites.length} item` : `${favourites.length} items`}
      </p>

      <ProductList phones={favourites} />
    </div>
  )
}
