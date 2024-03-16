import { ConfigProvider, theme } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { color } from '../tokens/tokens.js';
import App from './App.tsx';
import './index.css';
// setup sentry
import './services/sentry.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Menu: {
            darkItemBg: color.color.value.background,
            darkItemSelectedBg: color.color.value.controlSecondary,
            darkItemColor: color.color.value.textSecondary,
            fontFamily: 'Diablo Heavy',
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
