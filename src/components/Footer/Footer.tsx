import { FC } from 'react'
import styles from './Footer.module.scss'
import mainLogo from 'assets/icons/logo.svg'

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <a className={styles.footer__logo} href="/">
      <img src={mainLogo} alt="nice gadgets logo" />
    </a>
    <ul className={styles.footer__nav}>
      <li className={styles.footer__nav__item}>
        <a className={styles.footer__nav__link} href="/">
          Github
        </a>
      </li>
      <li className={styles.footer__nav__item}>
        <a className={styles.footer__nav__link} href="/">
          Contacts
        </a>
      </li>
      <li className={styles.footer__nav__item}>
        <a className={styles.footer__nav__link} href="/">
          Rights
        </a>
      </li>
    </ul>
    <a className={styles.footer__backToTop} href="/">
      <span className={styles.footer__backToTop__title}>Back to top</span>
      <span className={styles.footer__backToTop__btn}>^</span>
    </a>
  </footer>
)
