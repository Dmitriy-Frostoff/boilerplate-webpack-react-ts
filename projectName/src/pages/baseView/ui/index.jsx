import React, { StrictMode } from 'react';

import { Main, TestSection, Footer } from '../../../widgets/index.js';

export function BaseView() {
  return (
    <>
      <Main>
        <TestSection />
      </Main>
      <Footer />
    </>
  );
}
