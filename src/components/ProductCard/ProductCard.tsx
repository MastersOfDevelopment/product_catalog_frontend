import React from 'react'
import { Phone } from '../../types/Phone'
import { AddToFavoriteButton } from '../buttons/AddToFavoriteButton'
import { AddToCartButton } from '../buttons/AddToCartButton'
import styles from './ProductCard.module.scss'
import { useNavigate } from 'react-router-dom'

type Props = {
  phone: Phone
  isFullPrice: boolean
}

export const ProductCard: React.FC<Props> = ({ phone, isFullPrice = true }) => {
  const navigate = useNavigate()

  const { name, fullPrice, price, screen, capacity, ram, image, phoneId } = phone

  const navigateToDetails = () => {
    navigate(`/phones/${phoneId}`)
  }

  return (
    <div className={styles.productCardPage}>
      <div id="productCard" className={styles.container}>
        <img src={require(`assets/${image}`)} alt={name} onClick={navigateToDetails} className={styles.image} />
        <p className={styles.name}>{name}</p>

        <div className={styles.prices}>
          <p className={styles.price}>${price}</p>

          {isFullPrice && <p className={styles.fullPrice}>${fullPrice}</p>}
        </div>

        <div className={styles.separator} />

        <div className={styles.description}>
          <div className={styles.line}>
            <p className={styles.descriptionTitle}>Screen</p>
            <p className={styles.descriptionData}>{screen}</p>
          </div>

          <div className={styles.line}>
            <p className={styles.descriptionTitle}>Capacity</p>
            <p className={styles.descriptionData}>{capacity}</p>
          </div>

          <div className={styles.line}>
            <p className={styles.descriptionTitle}>RAM</p>
            <p className={styles.descriptionData}>{ram}</p>
          </div>
        </div>

        <div className={styles.buttonLine}>
          <div className={styles.addToCardButton}>
            <AddToCartButton phoneId={phoneId} />
          </div>
          <div className={styles.addToFavButton}>
            <AddToFavoriteButton phone={phone} />
          </div>
        </div>
      </div>
    </div>
  )
}
