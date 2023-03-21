import { CartContext } from 'context/CartContext'
import { useContext } from 'react'
import styles from './CartCheckout.module.scss'

interface Props {
  totalCost: number
  handleModal: () => void
}

export const CartCheckout: React.FC<Props> = ({ totalCost, handleModal }) => {
  const { cartItems } = useContext(CartContext)

  const totalItem = cartItems.reduce((total, item) => total + item.count, 0)

  return (
    <>
      <div className={styles.total_checkout}>
        <div className={styles.info}>
          <p className={styles.total_price}>${totalCost}</p>

          <p className={styles.number_of_items}>
            {`Total for ${totalItem}`} {totalItem === 1 ? `item` : `items`}
          </p>
          <div className={styles.line}></div>
          <button className={styles.button_checkout} onClick={() => handleModal()}>
            Checkout
          </button>
        </div>
      </div>
    </>
  )
}
