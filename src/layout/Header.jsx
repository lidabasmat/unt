import classnames from 'classnames';
import React, { useState } from 'react';

import Button from '../components/Button';
import Link from '../components/Link';
import MenuIcon from '../components/icons/MenuIcon';

import Logo from '../images/logo.svg';

const Header = () => {
  const [ opened, setOpened ] = useState(false);
  return (
    <>
      <header className="bg-red-500 py-5 text-white">
        <div className="container-lg">
          <div className="flex justify-between">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <nav className="hidden md:flex items-center">
              <Link to="/pisni/" className="typo-intro">
                пісні
              </Link>
              <div className="w-2 h-2 mx-8 bg-white" />
              <Link to="/smikhovyny/" className="typo-intro">
                сміховини
              </Link>
              <div className="w-2 h-2 mx-8 bg-white" />
              <Link to="/categories/" className="typo-intro">
                категорії
              </Link>
            </nav>
            <div className="md:hidden">
              <Button onClick={() => { setOpened(!opened) }}>
                <MenuIcon />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className={classnames(
        'fixed top-0 h-screen right-0 max-w-full w-[260px] bg-black transition-all duration-200',
        {
          'opacity-100 visible': opened,
          'opacity-0 invisible': !opened,
        },
      )}
      >
      </div>
    </>
  );
};

export default Header;
