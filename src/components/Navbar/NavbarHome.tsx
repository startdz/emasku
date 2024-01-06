import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarMenu } from '@/constants/Resource';
import Logo from '@/assets/Logo Emasku side.png';

const NavbarHome = () => {
  return (
    <React.Fragment>
      <header className='w-full max-w-6xl mx-auto flex justify-between items-center container py-4'>
        <div>
          {/* Logo */}
          <img src={Logo} alt='Emasku' className='w-56 h-12' />
        </div>
        <nav className='w-[66%]'>
          {/* Menu Navbar */}
          <ul className='w-full flex justify-between items-center'>
            {NavbarMenu.map((menu, index) => {
              return (
                <li key={index} className='text-slate-700'>
                  <Link to={menu.path} className='font-figma font-bold'>
                    {menu.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default NavbarHome;
