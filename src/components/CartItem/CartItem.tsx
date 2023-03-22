import React, { useContext } from 'react'
import icon_minus from 'assets/icons/minus.svg'
import icon_plus from 'assets/icons/plus.svg'
import icon_close from 'assets/icons/close.svg'
import styles from './CartItem.module.scss'
import { PhoneDetails } from 'types/PhoneDetails'
import { CartContext } from 'context/CartContext'

type Props = {
  product: PhoneDetails
  count: number
}

export const CartItem: React.FC<Props> = ({ product, count }) => {
  const { addOne, removeOne, removeItem } = useContext(CartContext)

  const { name, priceDiscount, images } = product

  const image = images[0]
  const totalPrice = priceDiscount * count

  const isRemovingDisabled = count === 1
  const isAddingDisabled = count > 9

  return (
    <div className={styles.cart}>
      <div className={styles.cart_info}>
        <button
          className={styles.delete_button_link}
          onClick={() => {
            removeItem(product.id)
          }}
        >
          <img className={styles.delete_button_img} src={icon_close} alt="remove phone" />
        </button>
        <img className={styles.phone_image} src={require(`assets/${image}`)} alt={image} />
        <a className={styles.content}>{name}</a>
      </div>

      <div className={styles.quantity_and_price}>
        <div className={styles.quantity_buttons}>
          <button
            className={styles.quantity_buttons_minus}
            onClick={() => {
              removeOne(product.id)
            }}
            disabled={isRemovingDisabled}
          >
            <img className={styles.quantity_minus_img} src={icon_minus} alt="x" />
          </button>

          <p className={styles.quantity_buttons_number}>{count}</p>

          <button
            className={styles.quantity_buttons_plus}
            onClick={() => {
              addOne(product.id)
            }}
            disabled={isAddingDisabled}
          >
            <img className={styles.quantity_plus_img} src={icon_plus} alt="x" />
          </button>
        </div>

        <p className={styles.phone_price}>${totalPrice}</p>
      </div>
    </div>
  )
}
