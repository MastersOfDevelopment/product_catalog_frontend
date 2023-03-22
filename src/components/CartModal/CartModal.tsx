import { CartContext } from '../../context/CartContext'
import React, { useContext } from 'react'
import styles from './CartModal.module.scss'

type Props = {
  handleModal: () => void
}

export const CartModal: React.FC<Props> = ({ handleModal }) => {
  const { removeAll } = useContext(CartContext)

  const handleConfirm = () => {
    removeAll()
    handleModal()
  }

  return (
    <div className={styles.modal_container}>
      <div className={styles.content}>
        <h4 className={styles.text}>Would you like to checkout?</h4>
        <div className={styles.line}></div>
        <div className={styles.buttons_container}>
          <button className={styles.button} onClick={handleConfirm}>
            Confirm
          </button>
          <button className={styles.button} onClick={handleModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
