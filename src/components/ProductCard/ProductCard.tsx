import React from 'react'
// import classNames from 'classnames';
// import { ProductCard } from './Todotype';
import { AddToFavoriteButton } from '../buttons/AddToFavoriteButton'
import { AddToCardButton } from '../buttons/AddToCardButton'
import './ProductCard.modules.scss'

export const ProductCard: React.FC = () => {
  return (
    <div className="container">
      <img
        // src="./01.jpg"
        alt="Apple iPhone Xs 64GB Silver (iMT9G2FS/A)"
        className="product-card__image"
      />
      <p className="product-card__name">Apple iPhone Xs 64GB Silver (iMT9G2FS/A)</p>

      <div className="product-card__prices">
        <p className="product-card__price">
          $799
        </p>

        <p className="product-card__fullPrice">$899</p>
      </div>

      <div className="product-card__separator" />

      <div className="product-card__description">
        <div className="product-card__line">
          <p className="product-card__description-title">
            Screen
          </p>
          <p className="product-card__description-data">
            5.8&quot; OLED
          </p>
        </div>

        <div className="product-card__line">
          <p className="product-card__description-title">
            Capacity
          </p>
          <p className="product-card__description-data">
            64 GB
          </p>
        </div>

        <div className="product-card__line">
          <p className="product-card__description-title">
            RAM
          </p>
          <p className="product-card__description-data">
            4 GB
          </p>
        </div>
      </div>

      <div className="button-line">
        <AddToCardButton />
        <AddToFavoriteButton />
      </div>
    </div>
  )
}
