import { Pagination } from 'components/Pagination'
import { getAllPhones } from 'api/getPhones'
import React, { useEffect, useState } from 'react'
import { Phone } from 'types/Phone'
import styles from './PhonesPage.module.scss'
import { Loader } from 'components/Loader'
import { ProductList } from 'components/ProductList'
import { SortBar } from 'components/SortBar'
import { useLocation } from 'react-router'

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [total, setTotal] = useState(0)

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
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    loadPhonesData()
  }, [searchParams])

  return (
    <div className={styles.grid}>
      <div className={styles.main}>
        <h1 className={styles.title}>Mobile phones</h1>
        <p className={styles.subtitle}>{`${total} models`}</p>

        <SortBar />

        {isLoading && <Loader />}

        {!isLoading && (
          <>
            <ProductList phones={phones} />
            <Pagination total={total} />
          </>
        )}
      </div>
    </div>
  )
}
