import styles from './SortBar.module.scss'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getNewSearchParams } from '../../utils/getNewSearchParams'

export const SortBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState('newest')
  const [perPage, setPerPage] = useState(16)

  useEffect(() => {
    const newParams = getNewSearchParams(searchParams, {
      sort,
      perPage,
    })
    setSearchParams(newParams)
  }, [searchParams, setSearchParams, sort, perPage])

  const handleSorting = (sort: string) => {
    const newParams = getNewSearchParams(searchParams, {
      sort,
    })
    setSearchParams(newParams)
    setSort(sort)
  }

  const handlePerPage = (perPage: string) => {
    const newParams = getNewSearchParams(searchParams, {
      perPage,
    })
    setSearchParams(newParams)
    setPerPage(+perPage)
  }

  return (
    <div className={styles.sortBar}>
      <div className={styles.sortBar__item}>
        <h2 className={styles.sortBar__title}>Sort by</h2>
        <select
          onChange={(event) => handleSorting(event.target.value)}
          defaultValue={sort}
          className={styles.sortBar__select}
          name=""
        >
          <option className={styles.sortBar__option} value="name">
            Newest
          </option>
          <option className={styles.sortBar__option} value="year">
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
