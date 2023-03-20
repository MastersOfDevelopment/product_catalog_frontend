import React from 'react'
import { Phone } from 'types/Phone'
import styles from './CardItem.module.scss'

type Props = {
  phone: Phone
}

export const CardItem: React.FC<Props> = ({ phone }) => {
  // const dispatch = useAppDispatch()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, name, image, fullPrice, count } = phone

  return (
    <div className={styles.cart}>
      <div className={styles.cart_info}>
        {/* <button className={styles.delete_button_link} onClick={() => dispatch(deletePhoneFromCart(id))}> */}
        <button className={styles.delete_button_link}>
          {/* <img className={styles.delete_button_img} src={icon_close} alt="remove phone" /> */}
          <img className={styles.delete_button_img} alt="remove phone" />
        </button>
        <img className={styles.phone_image} src={image} alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)" />
        <a className={styles.content}>{name}</a>
      </div>

      <div className={styles.quantity_and_price}>
        <div className={styles.quantity_buttons}>
          <button
            className={styles.quantity_buttons_minus}
            disabled={(count as number) < 2}
            // onClick={() => dispatch(removeOnePhoneFromCart(id))}
          >
            {/* <img className={styles.quantity_minus_img} src={icon_minus} alt="x" /> */}
            <img className={styles.quantity_minus_img} alt="x" />
          </button>

          <p className={styles.quantity_buttons_number}>{count}</p>

          <button className={styles.quantity_buttons_plus}>
            {/* <button className={styles.quantity_buttons_plus} onClick={() => dispatch(addPhoneToCart(phone))}> */}
            {/* <img className={styles.quantity_lus_img} src={icon_plus} alt="x" /> */}
            <img className={styles.quantity_lus_img} alt="x" />
          </button>
        </div>

        <p className={styles.phone_price}>${fullPrice}</p>
      </div>
    </div>
  )
}
