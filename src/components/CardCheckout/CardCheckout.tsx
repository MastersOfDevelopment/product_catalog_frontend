import { CartContext } from 'context/CartContext'
// import { ProductsContext } from 'context/ProductsProvider'
import { useContext } from 'react'
import styles from './CardCheckout.module.scss'

interface Props {
  totalCost: number
}

export const CardCheckout: React.FC<Props> = ({ totalCost }) => {
  // const { cart: phones } = useContext(ProductsContext)

  const { cartItems } = useContext(CartContext)

  const totalItem = cartItems.reduce((total, item) => total + item.count, 0)

  return (
    <>
      <div className={styles.total_checkout}>
        <div className={styles.info}>
          {/* <p className={styles.total_price}>${totalPrice}</p> */}
          <p className={styles.total_price}>${totalCost}</p>

          <p className={styles.number_of_items}>
            {`Total for ${totalItem}`} {cartItems.length === 1 ? `item` : `items`}
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
