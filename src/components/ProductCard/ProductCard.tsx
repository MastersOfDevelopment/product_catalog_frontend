import React from 'react'
import { Phone } from '../../types/Phone'
import { AddToFavoriteButton } from '../buttons/AddToFavoriteButton'
import { AddToCardButton } from '../buttons/AddToCardButton'
import styles from './ProductCard.module.scss'
import JJFF from '../../assets/img/phones/apple-iphone-xs-max/spacegray/00.jpg'

type Props = {
  phone: Phone
}

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const { name, fullPrice, price, screen, capacity, ram, image } = phone
  console.log(image)
  return (
    <div className={styles.container}>
      <img src={JJFF} alt={name} className={styles.image} />
      <p className={styles.name}>{name}</p>

      <div className={styles.prices}>
        <p className={styles.price}>${price}</p>

        <p className={styles.fullPrice}>${fullPrice}</p>
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
        <AddToCardButton />
        <AddToFavoriteButton />
      </div>
    </div>
  )
}
