/* eslint-disable import/no-unresolved */
import classnames from 'classnames'
import { ProductsContext } from 'context/ProductsProvider'
import React, { useContext } from 'react'
import { Phone } from 'types/Phone'
import styles from './AddToCardButton.module.scss'

type Props = {
  phone: Phone
}

export const AddToCardButton: React.FC<Props> = ({ phone }) => {
  const { cart, setCart } = useContext(ProductsContext)

  const isActive = cart.map((favPhone) => favPhone.id).includes(phone.id)

  const handleAddToCart = (phone: Phone) => {
    const favouritesIds = cart.map((cartPhone) => cartPhone.id)

    if (favouritesIds.includes(phone.id)) {
      setCart((currPhones) => currPhones.filter((currPhones) => currPhones.id !== phone.id))
    } else {
      setCart((currPhones) => [...currPhones, phone])
    }
  }

  return (
    <button
      type="button"
      className={classnames(styles.buttonAddToCard, {
        [styles.buttonAddToCard_active]: isActive,
      })}
      onClick={() => handleAddToCart(phone)}
    >
      {isActive ? 'Added' : 'Add to cart'}
    </button>
  )
}
