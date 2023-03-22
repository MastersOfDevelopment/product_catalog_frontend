import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Categories.module.scss'
import phones from '../../assets/img/categories/category-phones.jpg'
import tablets from '../../assets/img/categories/category-tablets.jpg'
import accessories from '../../assets/img/categories/category-accessories.jpg'

export const Categories: FC = () => {
  return (
    <div className={styles.categories}>
      <h2 className={styles.categories__title}>Shop by category</h2>

      <ul className={styles.categories__container}>
        <li className={styles.category}>
          <Link to={'/phones'}>
            <img className={styles.category__img} src={phones} alt="Mobile phones page" />
          </Link>
          <Link to={'/phones'} className={styles.category__name}>
            Mobile phones
          </Link>
          <p className={styles.category__itemsCount}>95 models</p>
        </li>

        <li className={styles.category}>
          <Link to={'/tablets'}>
            <img className={styles.category__img} src={tablets} alt="Tablets page" />
          </Link>
          <Link to={'/tablets'} className={styles.category__name}>
            Tablets
          </Link>
          <p className={styles.category__itemsCount}>24 models</p>
        </li>

        <li className={styles.category}>
          <Link to={'/accessories'}>
            <img className={styles.category__img} src={accessories} alt="Accessories page" />
          </Link>
          <Link to={'/accessories'} className={styles.category__name}>
            Accessories
          </Link>
          <p className={styles.category__itemsCount}>100 models</p>
        </li>
      </ul>
    </div>
  )
}
