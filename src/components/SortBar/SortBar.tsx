import styles from './SortBar.module.scss'
import { useSearchParams } from 'react-router-dom'
import { getNewSearchParams } from '../../utils/getNewSearchParams'

export const SortBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = searchParams.get('sort') || 'year'
  const perPage = searchParams.get('perPage') || '16'

  const handleSorting = (value: string) => {
    const newParams = getNewSearchParams(searchParams, {
      sort: value,
    })
    setSearchParams(newParams)
  }

  const handlePerPage = (value: string) => {
    const newParams = getNewSearchParams(searchParams, {
      perPage: value,
    })
    setSearchParams(newParams)
  }

  return (
    <div className={styles.sortBar}>
      <div className={styles.sortBar__item}>
        <h2 className={styles.sortBar__title}>Sort by</h2>
        <select
          onChange={(event) => handleSorting(event.target.value)}
          value={sort}
          className={styles.sortBar__select}
          name=""
        >
          <option className={styles.sortBar__option} value="year">
            Newest
          </option>
          <option className={styles.sortBar__option} value="name">
            Alphabetically
          </option>
          <option className={styles.sortBar__option} value="price">
            Cheapest
          </option>
        </select>
      </div>

      <div className={styles.sortBar__item}>
        <h2 className={styles.sortBar__title}>Items on page</h2>
        <select
          onChange={(event) => handlePerPage(event.target.value)}
          value={perPage}
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
