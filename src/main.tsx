import { ConfigProvider, theme } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';

import { color } from '../tokens/tokens.js';
import App from './App.tsx';
import './index.css';
import { errorEmitter } from './services/events.ts';
// setup sentry
import './services/sentry.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        refreshInterval: 5 * 60 * 1000, // 5 minutes
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 20 * 1000,
        errorRetryCount: 3,
        errorRetryInterval: 5000,
        focusThrottleInterval: 5000,
        loadingTimeout: 10000,
        // TODO: add http code logic to avoid retrying on 404, 500, etc
        shouldRetryOnError: () => {
          // emit error event
          errorEmitter.emit('error', 'Error fetching data');
          return true;
        },
      }}
    >
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
            Table: {
              fontFamily: 'Diablo Heavy',
            },
            Pagination: {
              fontFamily: 'Diablo Heavy',
            },
            Select: {
              fontFamily: 'Diablo Heavy',
            },
            Input: {
              fontFamily: 'Diablo Heavy',
            },
            Button: {
              fontFamily: 'Diablo Heavy',
            },
            Tag: {
              fontFamily: 'Diablo Heavy',
            },
          },
        }}
      >
        <App />
      </ConfigProvider>
    </SWRConfig>
  </React.StrictMode>,
);
