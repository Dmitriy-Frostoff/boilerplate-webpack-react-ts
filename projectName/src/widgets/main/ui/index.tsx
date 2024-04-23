import React, { StrictMode } from 'react';

interface IMainProps {
  children?: React.ReactNode;
}

export function Main({ children }: IMainProps): React.JSX.Element {
  return (
    <main className="layout-one-column container main__container">
      {children}
    </main>
  );
}
