import { NavLink } from 'react-router-dom'
import styles from './HeaderLogo.module.scss'
// eslint-disable-next-line import/no-unresolved
import mainLogo from 'assets/icons/logo.svg'

export const HeaderLogo = () => (
  <NavLink to="/" className={styles.header_logo_link}>
    <img className={styles.header_logo} alt="Main Logo" src={mainLogo} />
  </NavLink>
)
