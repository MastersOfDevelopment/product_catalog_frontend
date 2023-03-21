import { BreadCrumbs } from 'components/BreadCrumbs'
import React from 'react'
import styles from './AccessoriesPage.module.scss'

export const AccessoriesPage: React.FC = () => (
  <>
    <BreadCrumbs />
    <h1 className={styles.title}>Accessories</h1>
  </>
)
