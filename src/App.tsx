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
