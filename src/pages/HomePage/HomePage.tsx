/* eslint-disable import/no-unresolved */
import { BigSlider } from 'components/BigSlider'
import { PhonesSwiper } from 'components/PhonesSwiper'
import React from 'react'
import styles from './HomePage.module.scss'

export const HomePage: React.FC = () => (
  <>
    <div className={styles.container}>
      <h1 className={styles.homePage_header}>Welcome to Nice Gadgets store!</h1>
      <BigSlider />
      <div>
        <PhonesSwiper title={'Brand new models'} sortBy={'new'} />
      </div>
    </div>
  </>
)
