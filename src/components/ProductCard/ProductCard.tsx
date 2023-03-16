import React from 'react'
// import classNames from 'classnames';
// import { ProductCard } from './Todotype';
import { AddToFavoriteButton } from '../buttons/AddToFavoriteButton'
import { AddToCardButton } from '../buttons/AddToCardButton'
import './ProductCard.modules.scss'

export const ProductCard: React.FC = () => {
  return (
    <div>
      <img
        src="../../../public/img/phones/apple-iphone-xs/spacegray/01.jpg"
        alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
      />
      <p className="product-card__name">Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</p>

      <div>
        <p className="product-card__price">$799</p>

        <p className="product-card__fullPrice">$899</p>
      </div>

      <div className="product-card__description">
        <p className="product-card__description-title">Screen</p>
        <p className="product-card__description-data">5.8&quot; OLED</p>

        <p className="product-card__description-title">Capacity</p>
        <p className="product-card__description-data">64 GB</p>

        <p className="product-card__description-title">RAM</p>
        <p className="product-card__description-data">4 GB</p>
      </div>

      <AddToCardButton />
      <AddToFavoriteButton />
    </div>
  )
}
