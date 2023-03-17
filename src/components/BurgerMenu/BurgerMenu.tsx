import React from 'react'
import { HeaderLogo } from '../HeaderLogo'
import styles from './BurgerMenu.module.scss'
import closeBurgerMenu from 'assets/icons/close.svg'
import { NavLinkBurgerMenu } from '../NavLinkBurgerMenu'
import logoBagIcon from 'assets/icons/shopping-bag.svg'
import logoFavouriteIcon from 'assets/icons/favourites.svg'
import { BurgerMenuButton } from 'components/buttons/BurgerMenuButton'
import { BurgerMenuIcon } from 'components/BurgerMenuIcons'

type Props = {
  setIsBurgerMenuOpen: (type: boolean) => void
}

export const BurgerMenu: React.FC<Props> = ({ setIsBurgerMenuOpen }) => (
  <>
    <div className={styles.burgerMenu_container}>
      <HeaderLogo />
      <div className={styles.burgerMenu_button_container}>
        <BurgerMenuButton setIsBurgerMenuOpen={setIsBurgerMenuOpen} image={closeBurgerMenu} type={false} />
      </div>
    </div>
    <nav className={styles.burgerMenu_navLink_wrapper}>
      <ul className={styles.burgerMenu_navList}>
        <NavLinkBurgerMenu to="/" title="Home" setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
        <NavLinkBurgerMenu to="/phones" title="phones" setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
        <NavLinkBurgerMenu to="/tablets" title="tablets" setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
        <NavLinkBurgerMenu to="/accesories" title="accesories" setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
      </ul>
    </nav>
    <div className={styles.burgerMenu_footer_container}>
      <BurgerMenuIcon
        to={'/favourites'}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        src={logoFavouriteIcon}
        alt={'Favourites icon'}
      />
      <BurgerMenuIcon
        to={'/cart'}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        src={logoBagIcon}
        alt={'Shopping bag icon'}
      />
    </div>
  </>
)
