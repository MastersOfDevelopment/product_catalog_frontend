import { BigSlider } from '../../components/BigSlider'
import { PhonesSwiper } from '../../components/PhonesSwiper'
import { Categories } from '../../components/Categories'
import React from 'react'
import styles from './HomePage.module.scss'

export const HomePage: React.FC = () => (
  <>
    <div className={styles.container}>
      <h1 className={styles.homePage_header}>Nice Gadgets store!</h1>
      <BigSlider />
      <PhonesSwiper isFullPrice={false} title={'Brand new models'} sortBy={'new'} />
      <Categories />
      <PhonesSwiper isFullPrice={true} title={'Hot prices'} sortBy={'discount'} />
    </div>
  </>
)
