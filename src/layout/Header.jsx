import classnames from 'classnames';
import { navigate } from 'gatsby';
import React, { useState, } from 'react';

import Button from '../components/Button';
import Link from '../components/Link';
import MenuIcon from '../components/icons/MenuIcon';
import CloseIcon from '../components/icons/CloseIcon';

import Logo from '../images/logo.svg';

const Header = () => {
  const [ opened, setOpened ] = useState(false);

  const navigateTo = (url) => {
    setOpened(false);
    navigate(url);
  }
  return (
    <>
      <header className="bg-red-500 py-5 text-white">
        <div className="container-lg">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img src={Logo} alt="Лого – Перлини української народної творчості" />
              <span className="sr-only">Українська народна творчість – Головна</span>
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
              <Link to="/skoromovky/" className="typo-intro">
                скоромовки
              </Link>
              <div className="w-2 h-2 mx-8 bg-white" />
              <Link to="/pryslivia-ta-prykazky/" className="typo-intro">
                прислів'я та приказки
              </Link>
              <div className="w-2 h-2 mx-8 bg-white" />
              <Link to="/blog/" className="typo-intro">
                блог
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
        'fixed z-10 top-0 h-screen right-0 max-w-full w-full bg-black transition-all duration-500 text-white',
        {
          'opacity-100 visible': opened,
          'opacity-0 invisible': !opened,
        },
      )}
      >
        <div className="py-5 px-4 flex items-center justify-between">
          <div onClick={() => { navigateTo('/') }}>
            <img src={Logo} alt="logo" />
          </div>
          <Button onClick={() => { setOpened(false) }}>
            <CloseIcon />
          </Button>
        </div>
        <div className="py-5">
          <div onClick={() => { navigateTo('/pisni/') }} className="flex items-center typo-intro py-5 px-4">
            <span className="inline-block w-2 h-2 bg-white mr-4" />
            пісні
          </div>
          <div onClick={() => { navigateTo('/smikhovyny/') }} className="flex items-center typo-intro py-5 px-4">
            <span className="inline-block w-2 h-2 bg-white mr-4" />
            сміховини
          </div>
          <div onClick={() => { navigateTo('/skoromovky/') }} className="flex items-center typo-intro py-5 px-4">
            <span className="inline-block w-2 h-2 bg-white mr-4" />
            скоромовки
          </div>
          <div onClick={() => { navigateTo('/pryslivia-ta-prykazky/') }} className="flex items-center typo-intro py-5 px-4">
            <span className="inline-block w-2 h-2 bg-white mr-4" />
            прислів'я та приказки
          </div>
          <div onClick={() => { navigateTo('/blog/') }} className="flex items-center typo-intro py-5 px-4">
            <span className="inline-block w-2 h-2 bg-white mr-4" />
            блог
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
