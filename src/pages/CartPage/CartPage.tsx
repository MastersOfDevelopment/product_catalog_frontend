import { getPhoneDetails } from 'api/getPhones'
import { CartCheckout } from 'components/CartCheckout'
import { CartItem } from 'components/CartItem'
import { CartModal } from 'components/CartModal'
import { CartContext } from 'context/CartContext'
import React, { useContext, useState, useEffect } from 'react'
import { PhoneDetails } from 'types/PhoneDetails'
import styles from './CartPage.module.scss'

export const CartPage: React.FC = () => {
  const { cartItems, getCount } = useContext(CartContext)
  const [products, setProducts] = useState<PhoneDetails[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

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
      {isModalVisible && totalCost > 0 && <CartModal handleModal={handleModal} />}
      <div className={styles.cart_page}>
        <div>
          {cartItems.length > 0 ? (
            <>
              <div className={styles.items}>
                {products.map((product) => (
                  <CartItem key={product.id} product={product} count={getCount(product.id)} />
                ))}
              </div>
            </>
          ) : (
            <h4>Cart is empty</h4>
          )}
        </div>

        <CartCheckout totalCost={totalCost} handleModal={handleModal} />
      </div>
    </div>
  )
}
