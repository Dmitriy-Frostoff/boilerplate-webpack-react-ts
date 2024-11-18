import React, { StrictMode } from 'react';

import footerStyles from './footer.module.scss';

import githubLogo from '../../../shared/assets/images/svg/footer/github logo.svg';
import githubLogoActive from '../../../shared/assets/images/svg/footer/_active/github logo_active.svg';
import rs_school_jsLogo from '../../../shared/assets/images/svg/footer/rs_school_js.svg';
import rs_school_jsLogoActive from '../../../shared/assets/images/svg/footer/_active/rs_school_js_active.svg';

export default function Footer(): React.JSX.Element {
  return (
    <footer
      className={`container layout-one-column ${footerStyles.footer__container}`}
    >
      <ul className={`layout-multiple-columns ${footerStyles.footer__list}`}>
        <li className={`text-l ${footerStyles.footer__item}`}>
          &copy; 2024 Dmitriy Frostoff
        </li>
        <li className={`${footerStyles.footer__item}`}>
          <a
            className={`layout-one-column ${footerStyles.footer__link}`}
            href="https://github.com/Dmitriy-Frostoff"
            title="click to visit Dmitriy-Frostoff's GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <img
                className={`${footerStyles.footer__icon}`}
                src={githubLogo}
                alt="github logo"
              />
              <img
                className={`${footerStyles.footer__icon}`}
                src={githubLogoActive}
                alt="github logo active"
              />
            </span>
            <span className="text-l github-text">GitHub</span>
          </a>
        </li>
        <li className={`${footerStyles.footer__item}`}>
          <a
            className={`layout-one-column ${footerStyles.footer__link} rsschool-logo`}
            href="https://rs.school/js/"
            title="click to go to the RS School Course"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <img
                className={`${footerStyles.footer__icon}`}
                src={rs_school_jsLogo}
                alt="rs_school_js logo"
              />
              <img
                className={`${footerStyles.footer__icon}`}
                src={rs_school_jsLogoActive}
                alt="rs_school_js active"
              />
            </span>
          </a>
        </li>
      </ul>
    </footer>
  );
}
