/* eslint-disable import/no-unresolved */
import { BreadCrumbs } from 'components/BreadCrumbs'
import React from 'react'
import styles from './TabletsPage.module.scss'

export const TabletsPage: React.FC = () => (
  <>
    <BreadCrumbs />
    <h1 className={styles.title}>Tablets</h1>
  </>
)
