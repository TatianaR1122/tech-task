import React, { Suspense } from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('../components/Layout/Layout'));
const HomePage = lazy(() => import('../pages/Home/Home'));
const TweetsPage = lazy(() => import('../pages/Tweets/Tweets'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

// import css from './App.css';

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
