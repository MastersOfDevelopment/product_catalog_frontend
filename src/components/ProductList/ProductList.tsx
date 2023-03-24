import { ProductCard } from 'components/ProductCard'
import { Grid } from '@mui/material'
import React from 'react'
import styles from './ProductList.module.scss'
import { Phone } from 'types/Phone'

type Props = {
  phones: Phone[]
}

export const ProductList: React.FC<Props> = ({ phones }) => (
  <div className={styles.phonePage}>
    <Grid container justifyContent="center" rowSpacing={5} columnSpacing={2} className={styles.gridMui}>
      {phones.map((phone) => (
        <Grid key={phone.id} justifyContent="center" item>
          <ProductCard isFullPrice={true} phone={phone} isCardForSwiper={false} />
        </Grid>
      ))}
    </Grid>
  </div>
)
