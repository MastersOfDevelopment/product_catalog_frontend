/* eslint-disable import/no-unresolved */
import classnames from 'classnames'
import { FavouritesContext } from 'context/FavouritesProvider'
import React, { useContext } from 'react'
import { Phone } from 'types/Phone'
import styles from './AddToFavoriteButton.module.scss'

type Props = {
  phone: Phone
}

export const AddToFavoriteButton: React.FC<Props> = ({ phone }) => {
  const { favourites, setFavourites } = useContext(FavouritesContext)

  const isActive = favourites.map((favPhone) => favPhone.id).includes(phone.id)

  const handleAddToFavourites = (phone: Phone) => {
    const favouritesIds = favourites.map((favPhone) => favPhone.id)

    if (favouritesIds.includes(phone.id)) {
      setFavourites((currPhones) => currPhones.filter((currPhones) => currPhones.id !== phone.id))
    } else {
      setFavourites((currPhones) => [...currPhones, phone])
    }
  }

  return (
    <>
      <div className={styles.buttonConteiner}>
        <button
          type="button"
          className={classnames(styles.buttonFavorites, {
            [styles.buttonFavorites_active]: isActive,
          })}
          onClick={() => handleAddToFavourites(phone)}
        />
      </div>
    </>
  )
}
