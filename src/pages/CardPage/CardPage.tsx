import { CardCheckout } from 'components/CardCheckout'
import { CardPageList } from 'components/CardPageList'
import { ProductsContext } from 'context/ProductsProvider'
import React, { useContext } from 'react'
// import { Phone } from 'types/Phone'
import styles from './CardPage.module.scss'

export const CardPage: React.FC = () => {
  const { cart: phones } = useContext(ProductsContext)

  return (
    <div>
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.cart_page}>
        {phones.length > 0 && <CardPageList />}

        <CardCheckout />
      </div>
    </div>
  )
}
