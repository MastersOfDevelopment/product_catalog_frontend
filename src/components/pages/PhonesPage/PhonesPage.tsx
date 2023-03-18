import { getAllPhones } from 'api/getPhones'
import { ProductCard } from 'components/ProductCard'
import React, { useEffect, useState } from 'react'
import { Phone } from 'types/Phone'
import styles from './PhonesPage.module.scss'
// import '../../../styles/grid.scss'
import { Grid } from '@mui/material'

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([])
  // const [isLoading, setIsLoading] = useState(false)

  console.log(phones)

  const fetchAllPhones = async () => {
    try {
      const phonesFromServer = await getAllPhones()

      // setIsLoading(true)
      setPhones(phonesFromServer)
    } catch (error) {
      console.log(error)
    } finally {
      // setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAllPhones()
  }, [])

  return (
    <div className={styles.grid}>
      <div className={styles.main}>
        <h1 className={styles.title}>Mobile phones</h1>
        <p className={styles.subtitle}>95 models</p>
        <div className={styles.phonePage}>
          <Grid container justifyContent="center" rowSpacing={5} columnSpacing={2} className={styles.gridMui}>
            {phones.map((phone) => (
              <Grid key={1} justifyContent="center" item>
                <ProductCard key={phone.phoneId} phone={phone} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  )
}
