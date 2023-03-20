import { CardItem } from 'components/CardItem'
import { ProductsContext } from 'context/ProductsProvider'
import { useContext } from 'react'
import styles from './CardPageList.module.scss'

export const CardPageList = () => {
  const { cart: phones } = useContext(ProductsContext)
  return (
    <div className={styles.total_cardPageList}>
      {phones.length > 0 && phones.map((phone) => <CardItem key={phone.id} phone={phone} />)}
    </div>
  )
}
