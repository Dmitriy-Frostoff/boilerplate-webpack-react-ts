import React, { StrictMode } from 'react';
import githubLogoAnimated from '../../../shared/assets/images/gif/github.gif';

import testSectionStyles from './test-section.module.scss';

export default function TestSection(): React.JSX.Element {
  return (
    <section
      className={`layout-one-column ${testSectionStyles['test-section']}`}
    >
      <div
        className={`layout-one-column ${testSectionStyles['test-section__container']}`}
      >
        <h3 className="paragraph-xl text_let-space-3px text_uppercase text_light">
          Test test test
        </h3>
        <img src={githubLogoAnimated} alt="github logo animated" />
      </div>
    </section>
  );
}
