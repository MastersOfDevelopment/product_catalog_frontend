import { getAllPhones } from 'api/getPhones'
import { ProductCard } from 'components/ProductCard'
import React, { useEffect, useState } from 'react'
import { Phone } from 'types/Phone'
import styles from './PhonesPage.module.scss'
import { Grid } from '@mui/material'
import { SortBar } from 'components/SortBar'

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([])
  const fetchAllPhones = async () => {
    try {
      const phonesFromServer = await getAllPhones()
      setPhones(phonesFromServer)
    } catch (error) {
      console.log(error)
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
          <SortBar />
        </div>
      </div>
    </div>
  )
}
