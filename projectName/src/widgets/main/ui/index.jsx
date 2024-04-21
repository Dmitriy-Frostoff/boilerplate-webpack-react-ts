import React, { StrictMode } from 'react';

export function Main(props) {
  return (
    <main className="layout-one-column container main__container">
      {props.children}
    </main>
  );
}
