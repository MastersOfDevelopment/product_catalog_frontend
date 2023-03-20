import styles from './SortBar.module.scss'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'

export const SortBar: React.FC = () => {
  const [, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('newest')
  const [perPage, setPerPage] = useState(16)

  const handleSorting = (value: string) => {
    setSearchParams({ sortBy: value })
    setSortBy(value)
  }

  const handleQuantity = (value: string) => {
    setSearchParams({ perPage: value })
    setPerPage(+value)
  }

  return (
    <div className={styles.sortBar}>
      <div className={styles.sortBar__item}>
        <h2 className={styles.sortBar__title}>Sort by</h2>
        <select
          onChange={(event) => handleSorting(event.target.value)}
          defaultValue={sortBy}
          className={styles.sortBar__select}
          name=""
        >
          <option className={styles.sortBar__option} value="newest">
            Newest
          </option>
          <option className={styles.sortBar__option} value="alphabetically">
            Alphabetically
          </option>
          <option className={styles.sortBar__option} value="cheapest">
            Cheapest
          </option>
        </select>
      </div>

      <div className={styles.sortBar__item}>
        <h2 className={styles.sortBar__title}>Items on page</h2>
        <select
          onChange={(event) => handleQuantity(event.target.value)}
          defaultValue={perPage}
          className={styles.sortBar__selectItems}
          name=""
        >
          <option className={styles.sortBar__option} value="4">
            4
          </option>
          <option className={styles.sortBar__option} value="8">
            8
          </option>
          <option className={styles.sortBar__option} value="16">
            16
          </option>
          <option className={styles.sortBar__option} value="0">
            all
          </option>
        </select>
      </div>
    </div>
  )
}
