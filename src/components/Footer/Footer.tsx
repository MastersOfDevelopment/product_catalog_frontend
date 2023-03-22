import { FC } from 'react'
import styles from './Footer.module.scss'
import mainLogo from 'assets/icons/logo.svg'
import { Link } from 'react-router-dom'

export const Footer: FC = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className={styles.footer__container}>
      <footer className={styles.footer}>
        <Link className={styles.footer__logo__link} to="/">
          <img className={styles.footer__logo__img} src={mainLogo} alt="nice gadgets logo" />
        </Link>
        <ul className={styles.footer__nav}>
          <li className={styles.footer__nav__item}>
            <Link className={styles.footer__nav__link} to="https://github.com/MastersOfDevelopment" target="_blank">
              Github
            </Link>
          </li>
          <li className={styles.footer__nav__item}>
            <Link className={styles.footer__nav__link} to="/contacts">
              Contacts
            </Link>
          </li>
          <li className={styles.footer__nav__item}>
            <Link className={styles.footer__nav__link} to="/rights">
              Rights
            </Link>
          </li>
        </ul>
        <a className={styles.footer__backToTop} onClick={backToTop}>
          <span className={styles.footer__backToTop__title}>Back to top</span>
          <span className={styles.footer__backToTop__btn}></span>
        </a>
      </footer>
    </div>
  )
}
