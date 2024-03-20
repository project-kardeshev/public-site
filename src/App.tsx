import { ConfigProvider, theme } from 'antd';
import React, { Suspense, useEffect } from 'react';
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { SWRConfig } from 'swr';

import { color } from '../tokens/tokens.js';
import AppRouterLayout from './components/layout/AppRouterLayout';
import useDaoInterfaceSwitch from './hooks/useDaoInterfaceSwitch.tsx';
import NotFound from './pages/NotFound';
import { errorEmitter } from './services/events';
import { useGlobalState } from './services/state/useGlobalState';
import { validateArweaveId } from './utils.ts';

const Bounties = React.lazy(() => import('./pages/Bounties'));
const Blueprints = React.lazy(() => import('./pages/Blueprints'));
const TokenTransactions = React.lazy(() => import('./pages/TokenTransactions'));
const Dao = React.lazy(() => import('./pages/Dao'));
const Kardeshevians = React.lazy(() => import('./pages/Kardeshevians'));

function App() {
  const {
    memeFrameId,
    walletAddress,
    aoDataProvider,
    setKardBalance,
    setCredBalance,
    setMemeFrameId,
    useMemeframe,
    setUseMemeframe,
  } = useGlobalState();
  useDaoInterfaceSwitch(() => setUseMemeframe(!useMemeframe));

  async function updateUserData() {
    if (!walletAddress) return;
    const kardBalance = await aoDataProvider.getKardBalance(walletAddress);
    const credBalance = await aoDataProvider.getCredBalance(walletAddress);
    setKardBalance(kardBalance);
    setCredBalance(credBalance);
  }

  async function updateMemeFrame() {
    const id = await aoDataProvider.getMemeframeId();
    if (validateArweaveId(id)) {
      setMemeFrameId(id);

      const memeframeDiv = document.getElementById('memeframe');
      if (memeframeDiv) {
        // Ensure the div exists
        fetch(`https://arweave.net/${id}`)
          .then((res) => res.text())
          .then((html) => {
            // Directly set the innerHTML of the div to the fetched HTML content
            memeframeDiv.innerHTML = html;
          })
          .catch((error) => {
            console.error(
              'Failed to fetch or display the memeframe content:',
              error,
            );
          });
      }
    }
  }

  useEffect(() => {
    updateUserData();
    updateMemeFrame();
  }, [walletAddress]);

  const router = createHashRouter(
    createRoutesFromElements(
      <Route element={<AppRouterLayout />} errorElement={<NotFound />}>
        <Route
          index
          element={
            <Suspense
              fallback={<div className="flex flex-row text-3xl">Loading</div>}
            >
              <Bounties />
            </Suspense>
          }
        />
        <Route
          path="/bounties"
          element={
            <Suspense
              fallback={<div className="flex flex-row text-3xl">Loading</div>}
            >
              <Bounties />
            </Suspense>
          }
        />

        <Route
          path="/blueprints"
          element={
            <Suspense
              fallback={<div className="flex flex-row text-3xl">Loading</div>}
            >
              <Blueprints />
            </Suspense>
          }
        />

        <Route
          path="/token-transactions"
          element={
            <Suspense
              fallback={<div className="flex flex-row text-3xl">Loading</div>}
            >
              <TokenTransactions />
            </Suspense>
          }
        />
        <Route
          path="/dao"
          element={
            <Suspense
              fallback={<div className="flex flex-row text-3xl">Loading</div>}
            >
              <Dao />
            </Suspense>
          }
        />

        <Route
          path="/kardeshevians"
          element={
            <Suspense
              fallback={<div className="flex flex-row text-3xl">Loading</div>}
            >
              <Kardeshevians />
            </Suspense>
          }
        />
      </Route>,
    ),
  );

  const fontFamily = 'Diablo Light';
  // checks if we are in an iframe and prevents infinitely nesting iframes
  if (
    validateArweaveId(memeFrameId ?? '') &&
    window == window.top &&
    useMemeframe
  )
    return (
      <iframe
        title="memeframe"
        name="memeframe"
        className="size-full"
        src={`http://arweave.net/${memeFrameId}`}
      />
    );
  return (
    <>
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
                darkPopupBg: color.color.value.surfacePrimary,
                fontFamily,
              },
              Table: {
                fontFamily,
              },
              Pagination: {
                fontFamily,
              },
              Select: {
                fontFamily,
              },
              Input: {
                fontFamily,
              },
              Button: {
                fontFamily,
              },
              Tag: {
                fontFamily,
              },
              List: {
                fontFamily,
              },
              Notification: {
                fontFamily,
              },
              Tooltip: {
                fontFamily,
                colorBgSpotlight: color.color.value.surfacePrimary,
              },
              Drawer: {
                fontFamily,
              },
            },
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
      </SWRConfig>
    </>
  );
}

export default App;
