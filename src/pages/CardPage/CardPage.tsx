import { getPhoneDetails } from 'api/getPhones'
import { CardCheckout } from 'components/CardCheckout'
import { CardItem } from 'components/CardItem'
import { CartContext } from 'context/CartContext'
import React, { useContext, useState, useEffect } from 'react'
import { PhoneDetails } from 'types/PhoneDetails'
import styles from './CardPage.module.scss'

export const CardPage: React.FC = () => {
  const { cartItems, getCount } = useContext(CartContext)
  const [products, setProducts] = useState<PhoneDetails[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const fetchedProducts = await Promise.all(cartItems.map((item) => getPhoneDetails(item.id)))

      setProducts(fetchedProducts)
    }

    fetchData()
  }, [cartItems])

  const totalCost = products.reduce((total, product) => total + product.priceDiscount * getCount(product.id), 0)

  return (
    <div>
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.cart_page}>
        {cartItems.length > 0 ? (
          <>
            <div className={styles.items}>
              {products.map((product) => (
                <CardItem key={product.id} product={product} count={getCount(product.id)} />
              ))}
            </div>
          </>
        ) : (
          <h4 className={styles.title}>Cart is empty</h4>
        )}

        <CardCheckout totalCost={totalCost} />
      </div>
    </div>
  )
}
