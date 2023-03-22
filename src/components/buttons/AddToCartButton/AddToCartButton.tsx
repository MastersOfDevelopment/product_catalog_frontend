import classnames from 'classnames'
import { CartContext } from 'context/CartContext'
import React, { useContext } from 'react'
import styles from './AddToCartButton.module.scss'

type Props = {
  phoneId: string
}

export const AddToCartButton: React.FC<Props> = ({ phoneId }) => {
  const cartContext = useContext(CartContext)

  const isAdded = cartContext.isAdded(phoneId)

  const handleClickAdded = (): void => {
    if (isAdded) {
      cartContext.removeOne(phoneId)

      return
    }

    cartContext.addOne(phoneId)
  }

  return (
    <button
      type="button"
      className={classnames(styles.buttonAddToCard, {
        [styles.buttonAddToCard_active]: isAdded,
        [styles.buttonAddToCard]: !isAdded,
      })}
      onClick={handleClickAdded}
    >
      {isAdded ? 'Added' : 'Add to cart'}
    </button>
  )
}
