import React from 'react'
import styles from './Pagination.module.scss'

export const Pagination: React.FC = () => {
  return (
    <div className={styles.pagination__container}>
      <div className={styles.pagination__item}>
        <a className={styles.arrow__left}></a>
      </div>
      <ul className={styles.pagination}>
        <li className={styles.pagination__item}>
          <a className={styles.page__link}>1</a>
        </li>

        <li className={styles.pagination__item}>
          <a className={styles.page__link__selected}>2</a>
        </li>

        <li className={styles.pagination__item}>
          <a className={styles.page__link}>3</a>
        </li>

        <li className={styles.pagination__item}>
          <a className={styles.page__link}>4</a>
        </li>
      </ul>
      <div className={styles.pagination__item}>
        <a className={styles.arrow__right__disabled}></a>
      </div>
    </div>
  )
}
