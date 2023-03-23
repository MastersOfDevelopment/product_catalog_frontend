import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { getAllPhones } from 'api/getPhones'
import styles from './Categories.module.scss'
import phones from 'assets/img/categories/category-phones.jpg'
import tablets from 'assets/img/categories/category-tablets.jpg'
import accessories from 'assets/img/categories/category-accessories.jpg'

export const Categories: FC = () => {
  const [totalPhones, setTotalPhones] = useState(0)

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search).toString()

  useEffect(() => {
    const loadPhonesData = async () => {
      const phonesData = await getAllPhones(searchParams)
      setTotalPhones(phonesData.total)
    }

    loadPhonesData()
  }, [searchParams])

  return (
    <div className={styles.categories}>
      <h2 className={styles.categories__title}>Shop by category</h2>

      <ul className={styles.categories__container}>
        <li className={styles.category}>
          <Link to={'/phones'}>
            <div className={styles.category__img__wrapper}>
              <img className={styles.category__img} src={phones} alt="Mobile phones page" />
            </div>
          </Link>
          <Link to={'/phones'} className={styles.category__name}>
            Mobile phones
          </Link>
          <p className={styles.category__itemsCount}>{`${totalPhones} models`}</p>
        </li>

        <li className={styles.category}>
          <Link to={'/tablets'}>
            <div className={styles.category__img__wrapper}>
              <img className={styles.category__img} src={tablets} alt="Tablets page" />
            </div>
          </Link>
          <Link to={'/tablets'} className={styles.category__name}>
            Tablets
          </Link>
          <p className={styles.category__itemsCount}>0 models</p>
        </li>

        <li className={styles.category}>
          <Link to={'/accessories'}>
            <div className={styles.category__img__wrapper}>
              <img className={styles.category__img} src={accessories} alt="Accessories page" />
            </div>
          </Link>
          <Link to={'/accessories'} className={styles.category__name}>
            Accessories
          </Link>
          <p className={styles.category__itemsCount}>0 models</p>
        </li>
      </ul>
    </div>
  )
}
