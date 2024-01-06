import NavbarHome from '@/components/Navbar/NavbarHome';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
          <NavbarHome />
          {children}
        </div>
      </React.Fragment>
    </HelmetProvider>
  );
};

export default RootHeader;
