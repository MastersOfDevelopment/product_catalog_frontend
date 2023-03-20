import React, { useContext } from 'react'
import icon_minus from '../../assets/icons/minus.svg'
import icon_plus from '../../assets/icons/plus.svg'
import icon_close from '../../assets/icons/close.svg'
import { Phone } from 'types/Phone'
import styles from './CardItem.module.scss'
import { ProductsContext } from 'context/ProductsProvider'

type Props = {
  phone: Phone
}

export const CardItem: React.FC<Props> = ({ phone }) => {
  // const dispatch = useAppDispatch()
  const { cart, setCart } = useContext(ProductsContext)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, name, image, fullPrice, count } = phone

  const handleRemoveFromCart = (phone: Phone) => {
    const cartIds = cart.map((favPhone) => favPhone.id)

    if (cartIds.includes(phone.id)) {
      setCart((currPhones) => currPhones.filter((currPhones) => currPhones.id !== phone.id))
    } else {
      setCart((currPhones) => [...currPhones, phone])
    }
  }

  return (
    <div className={styles.cart}>
      <div className={styles.cart_info}>
        {/* <button className={styles.delete_button_link} onClick={() => dispatch(deletePhoneFromCart(id))}> */}

        <button className={styles.delete_button_link} onClick={() => handleRemoveFromCart(phone)}>
          <img className={styles.delete_button_img} src={icon_close} alt="remove phone" />
        </button>
        <img
          className={styles.phone_image}
          src={require(`assets/${image}`)}
          alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
        />
        <a className={styles.content}>{name}</a>
      </div>

      <div className={styles.quantity_and_price}>
        <div className={styles.quantity_buttons}>
          <button
            className={styles.quantity_buttons_minus}
            disabled={(count as number) < 2}
            // onClick={() => dispatch(removeOnePhoneFromCart(id))}
          >
            <img className={styles.quantity_minus_img} src={icon_minus} alt="x" />
          </button>

          <p className={styles.quantity_buttons_number}>{count}</p>

          <button className={styles.quantity_buttons_plus}>
            {/* <button className={styles.quantity_buttons_plus} onClick={() => dispatch(addPhoneToCart(phone))}> */}
            <img className={styles.quantity_plus_img} src={icon_plus} alt="x" />
          </button>
        </div>

        <p className={styles.phone_price}>${fullPrice}</p>
      </div>
    </div>
  )
}
