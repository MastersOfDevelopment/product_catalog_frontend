import styles from './SortBar.module.scss'
import { useSearchParams } from 'react-router-dom'

export const SortBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const defaultSort = 'newest'
  const defaultQuantity = 16

  const handleSorting = (value: string) => {
    setSearchParams({ sort: value })
  }

  const handleQuantity = (quantity: string) => {
    setSearchParams({ items: quantity })
  }

  return (
    <div className={styles.sortingPanel}>
      <div>{searchParams}</div>
      <div className={styles.sortingPanel__item}>
        <h2 className={styles.sortingPanel__title}> Sort by</h2>
        <select onChange={(event) => handleSorting(event.target.value)} value={defaultSort} className="" name="">
          <option value="newest">Newest</option>
          <option value="alphabetically">Alphabetically</option>
          <option value="cheapest">Cheapest</option>
        </select>
      </div>

      <div className={styles.sortingPanel__item}>
        <h2 className={styles.sortingPanel__title}> Items on page </h2>
        <select onChange={(event) => handleQuantity(event.target.value)} value={defaultQuantity} className="" name="">
          <option className="" value="4">
            4
          </option>
          <option value="8">8</option>
          <option selected value="16">
            16
          </option>
          <option value="all">all</option>
        </select>
      </div>
    </div>
  )
}
