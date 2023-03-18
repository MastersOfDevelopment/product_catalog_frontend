import styles from './BurgerMenuButton.module.scss'
import React from 'react'

type Props = {
  setIsBurgerMenuOpen: (type: boolean) => void
  image: string
  type: boolean
}

export const BurgerMenuButton: React.FC<Props> = ({ setIsBurgerMenuOpen, image, type }) => {
  return (
    <button className={styles.burgerMenu_button} onClick={() => setIsBurgerMenuOpen(type)}>
      <img className={styles.burgerMenu_close_image} alt="close menu" src={image} />
    </button>
  )
}
