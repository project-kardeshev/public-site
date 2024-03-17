import { wrapCreateBrowserRouter } from '@sentry/react';
import React, { Suspense } from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import AppRouterLayout from './components/layout/AppRouterLayout';
import NotFound from './pages/NotFound';

const Bounties = React.lazy(() => import('./pages/Bounties'));
const Blueprints = React.lazy(() => import('./pages/Blueprints'));
const TokenTransactions = React.lazy(() => import('./pages/TokenTransactions'));
const Dao = React.lazy(() => import('./pages/Dao'));
const Kardeshevians = React.lazy(() => import('./pages/Kardeshevians'));

const sentryCreateBrowserRouter = wrapCreateBrowserRouter(createBrowserRouter);

function App() {
  const router = sentryCreateBrowserRouter(
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

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
