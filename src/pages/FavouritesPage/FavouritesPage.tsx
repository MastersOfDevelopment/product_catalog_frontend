import { ProductList } from 'components/ProductList'
import { ProductsContext } from 'components/ProductsProvider'
import React, { useContext } from 'react'
import styles from './FavouritesPage.module.scss'

export const FavouritesPage: React.FC = () => {
  const { favourites } = useContext(ProductsContext)

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Favourites</h1>
      <p className={styles.subtitle}>
        {favourites.length === 1 ? `${favourites.length} item` : `${favourites.length} items`}
      </p>

      <ProductList phones={favourites} />
    </div>
  )
}
