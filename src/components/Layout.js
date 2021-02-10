import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <p>This is the place below children</p>


      {children}

    </div>
  );
};

export default Layout;