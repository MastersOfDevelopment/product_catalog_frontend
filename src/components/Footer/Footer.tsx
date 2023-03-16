import { FC } from 'react';
import './Footer.scss';

export const Footer: FC = () => (
  <footer className="footer">
    <a className="footer__logo" href="/">
      Nice
      <img src="../../../public/logo_hand.png" alt="" />
      <br />
      Gadgets
    </a>
    <ul className="footer__nav">
      <li className="footer__nav__item">
        <a className="footer__nav__link" href="/">
          Github
        </a>
      </li>
      <li className="footer__nav__item">
        <a className="footer__nav__link" href="/">
          Contacts
        </a>
      </li>
      <li className="footer__nav__item">
        <a className="footer__nav__link" href="/">
          Rights
        </a>
      </li>
    </ul>
    <a className="footer__backToTop" href="/">
      <span className="footer__backToTop__title">Back to top</span>
      <span className="footer__backToTop__btn">^</span>
    </a>
  </footer>
);
