import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DenseAppBar from '@/components/Navbar/Navbar';

// import NavbarHome from '@/components/Navbar/NavbarHome';

interface RootHeaderInterface {
  title: string;
  children: React.ReactNode;
}

const RootHeader = ({ title, children }: RootHeaderInterface) => {
  return (
    <HelmetProvider>
      <React.Fragment>
        <div className='font-figma'>
          <Helmet>
            <meta charSet='utf-8' />
            <title>{title}</title>
            <link rel='' href='' />
          </Helmet>
          {/* <NavbarHome /> */}
          <DenseAppBar />
          {children}
        </div>
      </React.Fragment>
    </HelmetProvider>
  );
};

export default RootHeader;
