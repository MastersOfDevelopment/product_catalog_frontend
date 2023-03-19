import { Pagination } from 'components/Pagination'
import { getAllPhones } from 'api/getPhones'
import React, { useEffect, useState } from 'react'
import { Phone } from 'types/Phone'
import styles from './PhonesPage.module.scss'
import { Loader } from 'components/Loader'
import { ProductList } from 'components/ProductList'
import { SortBar } from 'components/SortBar'

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchAllPhones = async () => {
    try {
      setIsLoading(true)

      const phonesFromServer = await getAllPhones()

      setPhones(phonesFromServer)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAllPhones()
  }, [])

  return (
    <div className={styles.grid}>
      <div className={styles.main}>
        <h1 className={styles.title}>Mobile phones</h1>
        <p className={styles.subtitle}>{`${phones.length} models`}</p>

        <SortBar />

        {isLoading && <Loader />}

        {!isLoading && <ProductList phones={phones} />}
      </div>
      <Pagination />
    </div>
  )
}
