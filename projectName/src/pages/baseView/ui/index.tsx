import React, { StrictMode } from 'react';

import { Main, TestSection, Footer } from '../../../widgets/index';

export default function BaseView(): React.JSX.Element {
  return (
    <>
      <Main>
        <TestSection />
      </Main>
      <Footer />
    </>
  );
}
