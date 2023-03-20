import { ProductsContext } from 'context/ProductsProvider'
import { useContext } from 'react'
import styles from './CardCheckout.module.scss'

export const CardCheckout = () => {
  const { cart: phones } = useContext(ProductsContext)

  return (
    <>
      <div className={styles.total_checkout}>
        <div className={styles.info}>
          {/* <p className={styles.total_price}>${totalPrice}</p> */}
          <p className={styles.total_price}>$255</p>

          <p className={styles.number_of_items}>
            {phones.length === 1 ? `${phones.length} item` : `${phones.length} items`}
          </p>
          <div className={styles.line}></div>
          <button className={styles.button_checkout} data-qa="hover">
            Checkout
          </button>
        </div>
      </div>
    </>
  )
}
