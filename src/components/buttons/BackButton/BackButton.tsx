import React from 'react'
import styles from './BackButton.module.scss'
import { useNavigate } from 'react-router-dom'
import BackArrow from '../../../assets/icons/arrow-left.svg'

export const BackButton: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.history}>
      <img src={BackArrow} className={styles.historyIcon} />
      <button className={styles.historyTitle} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  )
}
