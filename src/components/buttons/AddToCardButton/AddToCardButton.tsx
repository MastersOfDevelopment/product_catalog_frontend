import React from 'react'
import styles from './AddToCardButton.module.scss'

export const AddToCardButton: React.FC = () => {
  return (
    <button type="button" className={styles.buttonAddToCard}>
      Add to cart
    </button>
  )
}
