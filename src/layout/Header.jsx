import * as React from 'react';

import Link from '../components/Link';

import IconCartLogo from '../images/logo.svg';

const Header = () => {
  return (
    <>
      <header className="bg-red-500 py-5">
        <div className="container-lg">
          <div className="flex justify-between">
            <Link to="/">
              <img src={IconCartLogo} alt="logo" />
            </Link>
            <nav className="hidden md:flex items-center">
              <Link to="/about/" className="typo-intro text-white">
                проєкт
              </Link>
              <div className="w-2 h-2 mx-8 bg-white" />
              <Link to="/songs/" className="typo-intro text-white">
                пісні
              </Link>
              <div className="w-2 h-2 mx-8 bg-white" />
              <Link to="/jokes/" className="typo-intro text-white">
                сміховини
              </Link>
              <div className="w-2 h-2 mx-8 bg-white" />
              <Link to="/categories/" className="typo-intro text-white">
                категорії
              </Link>
              <div className="w-2 h-2 mx-8 bg-white" />
              <Link to="/contacts" className="typo-intro text-white">
                контакти
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
