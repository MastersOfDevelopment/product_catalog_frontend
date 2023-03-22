import React from 'react'
import styles from './AccessoriesPage.module.scss'
import UnderConstruction from 'assets/img/UnderConstruction.png'

export const AccessoriesPage: React.FC = () => (
  <div className={styles.container}>
    <h2>Page is under construction</h2>
    <img className={styles.image} src={UnderConstruction} alt="under-construction" />
  </div>
)
