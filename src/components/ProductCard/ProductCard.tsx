import React from 'react'
import { ProductCardPhone } from '../../types/ProductCardPhoneType'
import { AddToFavoriteButton } from '../buttons/AddToFavoriteButton'
import { AddToCardButton } from '../buttons/AddToCardButton'
import styles from './ProductCard.module.scss'
import somePhoto from '../../assets/images/phones/apple-iphone-xs-max/silver/00.jpg'

// type Props = {
//   phoneCard: ProductCardPhone
// }

export const ProductCard: React.FC = () => {
  // const { image, name, price, fullPrice, screen, capacity, ram } = phoneCard

  return (
    <div className={styles.container}>
      <img src={somePhoto} alt="" className={styles.image} />
      <p className={styles.name}>Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</p>

      <div className={styles.prices}>
        <p className={styles.price}>$799</p>

        <p className={styles.fullPrice}>$899</p>
      </div>

      <div className={styles.separator} />

      <div className={styles.description}>
        <div className={styles.line}>
          <p className={styles.descriptionTitle}>Screen</p>
          <p className={styles.descriptionData}>5.8” OLED</p>
        </div>

        <div className={styles.line}>
          <p className={styles.descriptionTitle}>Capacity</p>
          <p className={styles.descriptionData}>64 GB</p>
        </div>

        <div className={styles.line}>
          <p className={styles.descriptionTitle}>RAM</p>
          <p className={styles.descriptionData}>4 GB</p>
        </div>
      </div>

      <div className={styles.buttonLine}>
        <AddToCardButton />
        <AddToFavoriteButton />
      </div>
    </div>
  )
}
