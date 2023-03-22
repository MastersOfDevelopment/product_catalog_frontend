/* eslint-disable import/no-unresolved */
import { Pagination } from 'components/Pagination'
import { getAllPhones } from 'api/getPhones'
import React, { useEffect, useState } from 'react'
import { Phone } from 'types/Phone'
import styles from './PhonesPage.module.scss'
import { Loader } from 'components/Loader'
import { ProductList } from 'components/ProductList'
import { SortBar } from 'components/SortBar'
import { useLocation } from 'react-router'
import { BreadCrumbs } from 'components/BreadCrumbs'

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [total, setTotal] = useState(0)
  const [hasError, setHasError] = useState(false)

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search).toString()

  useEffect(() => {
    const loadPhonesData = async () => {
      try {
        setIsLoading(true)

        const phonesData = await getAllPhones(searchParams)
        setPhones(phonesData.phones)
        setTotal(phonesData.total)
      } catch (error) {
        setHasError(true)
        setIsLoading(false)
      } finally {
        setIsLoading(false)
      }
    }

    loadPhonesData()
  }, [searchParams])

  return (
    <div className={styles.grid}>
      <div className={styles.main}>
        <BreadCrumbs />
        <h1 className={styles.title}>Mobile phones</h1>
        <p className={styles.subtitle}>{`${total} models`}</p>

        {isLoading && <Loader />}

        {hasError && <h3>Something went wrong</h3>}

        {!isLoading && !hasError && (
          <>
            <SortBar />
            <ProductList phones={phones} />
            <Pagination total={total} />
          </>
        )}
      </div>
    </div>
  )
}
