import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../Header/Header';
import Loader from '../Loader/Loader';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
