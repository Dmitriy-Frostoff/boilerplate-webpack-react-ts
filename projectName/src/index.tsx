import React, { StrictMode } from 'react';
import { Root, createRoot } from 'react-dom/client';

import './app/index';

import logSelfCheck from './shared/projectNameSelfCheck/index';

import BaseView from './pages/index';

logSelfCheck();

const rootElem: HTMLElement | null = document.querySelector('#root');

if (!rootElem) {
  throw new Error('div with id="root" is not found!');
}

const root: Root = createRoot(rootElem);

root.render(
  <StrictMode>
    <BaseView />
  </StrictMode>,
);
