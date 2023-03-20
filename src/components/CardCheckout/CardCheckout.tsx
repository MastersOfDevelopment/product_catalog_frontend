import styles from './CardCheckout.module.scss'

export const CardCheckout = () => {
  console.log('here')

  return (
    <>
      <div className={styles.total_checkout}>
        <div className={styles.info}>
          {/* <p className={styles.total_price}>${totalPrice}</p> */}
          <p className={styles.total_price}>$255</p>
          {/* <p className={styles.number_of_items}>
            {`Total for ${totalPhones} ${totalPhones === 1 ? 'item' : 'items'}
            `}
          </p> */}

          <p className={styles.number_of_items}>Total for 3 items</p>
          <div className={styles.line}></div>
          <button className={styles.button_checkout} data-qa="hover">
            Checkout
          </button>
        </div>
      </div>
    </>
  )
}
