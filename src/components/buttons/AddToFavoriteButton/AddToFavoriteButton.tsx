import { ProductsContext } from 'components/ProductsProvider'
import React, { useContext } from 'react'
import { Phone } from 'types/Phone'
import styles from './AddToFavoriteButton.module.scss'

type Props = {
  phone: Phone
}

export const AddToFavoriteButton: React.FC<Props> = ({ phone }) => {
  const { favourites, setFavourites } = useContext(ProductsContext)

  const handleAddToFavourites = (phone: Phone) => {
    const favouritesIds = favourites.map((favPhone) => favPhone.id)

    if (favouritesIds.includes(phone.id)) {
      setFavourites((currPhones) => currPhones.filter((currPhones) => currPhones.id !== phone.id))
    } else {
      setFavourites((currPhones) => [...currPhones, phone])
    }
  }

  return <button type="button" className={styles.buttonFavorites} onClick={() => handleAddToFavourites(phone)} />
}
