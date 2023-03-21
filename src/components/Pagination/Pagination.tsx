import { FC } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { visiblePageLinks } from '../../utils/visiblePageLinks'
import { getNewSearchParams } from '../../utils/getNewSearchParams'
import styles from './Pagination.module.scss'

type Props = {
  total: number
}

export const Pagination: FC<Props> = ({ total }) => {
  const [searchParams] = useSearchParams()
  const perPage = searchParams.get('perPage') || null
  const page = searchParams.get('page') || '1'
  const numberOfPages = Math.ceil(total / (Number(perPage) || total))

  const linkToChage = (page: string | null) => {
    return {
      search: getNewSearchParams(searchParams, {
        page,
      }),
    }
  }

  return (
    <div className={styles.pagination__container}>
      <div className={styles.pagination__item}>
        <Link
          to={linkToChage(+page === 1 ? null : `${+page - 1}`)}
          className={page === '1' ? styles.arrow__left__disabled : styles.arrow__left}
        />
      </div>
      <ul className={styles.pagination}>
        {visiblePageLinks(numberOfPages, page).map((pageLink) => (
          <li className={styles.pagination__item} key={pageLink}>
            <Link
              to={linkToChage(pageLink === 1 ? null : pageLink.toString())}
              className={+page === pageLink ? styles.page__link__selected : styles.page__link}
            >
              {pageLink}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.pagination__item}>
        <Link
          to={linkToChage(+page === numberOfPages ? page : `${+page + 1}`)}
          className={+page === numberOfPages ? styles.arrow__right__disabled : styles.arrow__right}
        />
      </div>
    </div>
  )
}
