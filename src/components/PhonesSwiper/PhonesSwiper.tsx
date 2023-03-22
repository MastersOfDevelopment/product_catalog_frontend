import React, { useEffect, useState } from 'react'
import { Loader } from 'components/Loader'
import { getProductsByCategory } from 'api/getPhones'
import { ProductCard } from 'components/ProductCard'
import styles from './PhonesSwiper.module.scss'
import { Phone } from 'types/Phone'
import leftButton from 'assets/icons/left-button.svg'
import rightButton from 'assets/icons/right-button.svg'

type Props = {
  title: string
  sortBy: string
}

export const PhonesSwiper: React.FC<Props> = ({ title, sortBy }) => {
  const cardInfo = document.getElementById('productCard')
  const cardWidth = cardInfo?.offsetWidth
  const [phones, setPhones] = useState<Phone[]>([])
  const [position, setPosition] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const moveCard = (cardWidth ? cardWidth + 16 : 288) * position

  console.log(cardWidth)
  const loadPhonesData = async () => {
    try {
      setIsLoading(true)

      const phonesData = await getProductsByCategory(sortBy)
      setPhones(phonesData.products)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadPhonesData()
    // P.S: i dont need to add 'loadPhonesData to dependences, so i turned off elsint
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy])

  return (
    <div className={styles.phoneSwiper}>
      <div className={styles.phoneSwiper_head}>
        <h2 className={styles.phoneSwiper_title}>{title}</h2>
        <div className={styles.phoneSwiper_buttons}>
          <button
            className={styles.phoneSwiper_button}
            onClick={() => {
              setPosition((position) => position - 1)
            }}
            disabled={position === 0}
          >
            <img src={leftButton} alt="previous button" className={styles.button_image} />
          </button>
          <button
            className={styles.phoneSwiper_button}
            onClick={() => {
              setPosition((position) => position + 1)
            }}
            disabled={position === phones.length - 1}
          >
            <img src={rightButton} alt="next button" className={styles.button_image} />
          </button>
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.phoneSwiper_cards}>
          {phones.map((phone) => (
            <div style={{ transform: `translateX(-${moveCard}px)` }} key={phone.id} className={styles.phoneSwiper_card}>
              <ProductCard phone={phone} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
