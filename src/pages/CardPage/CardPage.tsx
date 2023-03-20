import { CardCheckout } from 'components/CardCheckout'
import { CardItem } from 'components/CardItem'
import React from 'react'
import { Phone } from 'types/Phone'
import styles from './CardPage.module.scss'

export const CartPage: React.FC = () => {
  // const { phones } = useAppSelector(selectCart)
  const phones: Phone[] = [
    // {
    //   id: 17,
    //   category: 'phones',
    //   phoneId: 'apple-iphone-xs-max-256gb-silver',
    //   itemId: 'apple-iphone-xs-max-256gb-silver',
    //   name: 'Apple iPhone XS Max 256GB Silver',
    //   fullPrice: 1080,
    //   price: 1000,
    //   screen: "6.5' OLED",
    //   capacity: '256GB',
    //   color: 'silver',
    //   ram: '4GB',
    //   year: 2018,
    //   image: 'img/phones/apple-iphone-xs-max/silver/00.jpg',
    //   count: 1,
    // },
    // {
    //   id: 34,
    //   category: 'phones',
    //   phoneId: 'apple-iphone-xs-max-256gb-gold',
    //   itemId: 'apple-iphone-xs-max-256gb-gold',
    //   name: 'Apple iPhone XS Max 256GB Gold',
    //   fullPrice: 1080,
    //   price: 1000,
    //   screen: "6.5' OLED",
    //   capacity: '256GB',
    //   color: 'gold',
    //   ram: '4GB',
    //   year: 2018,
    //   image: 'img/phones/apple-iphone-xs-max/gold/00.jpg',
    //   count: 1,
    // },
    // {
    //   id: 68,
    //   category: 'phones',
    //   phoneId: 'apple-iphone-xs-max-256gb-spacegray',
    //   itemId: 'apple-iphone-xs-max-256gb-spacegray',
    //   name: 'Apple iPhone XS Max 256GB Spacegray',
    //   fullPrice: 1080,
    //   price: 1000,
    //   screen: "6.5' OLED",
    //   capacity: '256GB',
    //   color: 'spacegray',
    //   ram: '4GB',
    //   year: 2018,
    //   image: 'img/phones/apple-iphone-xs-max/spacegray/00.jpg',
    //   count: 1,
    // },
  ]

  return (
    <div className={styles.cart_page}>
      <h1 className={styles.title}>Cart</h1>

      {phones.length > 0 && phones.map((phone) => <CardItem key={phone.id} phone={phone} />)}

      <CardCheckout />
    </div>
  )
}
