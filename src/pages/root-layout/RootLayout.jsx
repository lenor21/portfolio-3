import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Loader from '../../components/loader/Loader';
import { useState, useEffect } from 'react';

const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  
  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
