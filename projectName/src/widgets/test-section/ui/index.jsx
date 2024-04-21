import React, { StrictMode } from 'react';
import githubLogoAnimated from '../../../shared/assets/images/gif/github.gif';

export function TestSection() {
  return (
    <section className="layout-one-column test-section">
      <div className="layout-one-column test-section__container">
        <h3 className="paragraph-xl text_let-space-3px text_uppercase text_light">
          Test test test
        </h3>
        <img src={githubLogoAnimated} alt="github logo animated" />
      </div>
    </section>
  );
}
