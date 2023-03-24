import React from 'react'
import styles from './TabletsPage.module.scss'
import UnderConstruction from 'assets/img/UnderConstruction.png'

export const TabletsPage: React.FC = () => (
  <div className={styles.container}>
    <h1>This page is under construction</h1>
    <img className={styles.image} src={UnderConstruction} alt="under-construction" />
  </div>
)
