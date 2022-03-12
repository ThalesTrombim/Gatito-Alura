import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { ScreenDefault } from './src/components/ScreenDefault';
import { Routes } from './src/Routes';


export default function App() {
  return (
    <ScreenDefault>
      <Routes />
    </ScreenDefault>
  );
}