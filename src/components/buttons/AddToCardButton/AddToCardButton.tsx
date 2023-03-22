/* eslint-disable import/no-unresolved */
import classnames from 'classnames'
import { CartContext } from 'context/CartContext'
// import { ProductsContext } from 'context/ProductsProvider'
import React, { useContext } from 'react'
import { Phone } from 'types/Phone'
import { PhoneDetails } from 'types/PhoneDetails'
import styles from './AddToCardButton.module.scss'

type Props = {
  phoneId: string
}

export const AddToCardButton: React.FC<Props> = ({ phoneId }) => {
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
