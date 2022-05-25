import * as React from 'react';
import IconCartLogo from '../images/logo.svg';
import IconFigure from '../images/figure.svg';

const Header = () => {
  return (
    <>
      <header className="bg-red-500 py-5">
        <div className="container-lg">
          <div className="flex justify-between">
            <div className="">
              <img src={IconCartLogo} className="" alt="logo" />
            </div>
            <div className="flex items-center">
              <div className="">
                <a href="#" className="typo-intro text-white">архів</a>
              </div>
              <img src={IconFigure} className="w-3 ml-8" alt="figure" />
              <div className="ml-8">
                <a href="#" className="typo-intro text-white">підтримати ресурс</a>
              </div>
              <img src={IconFigure} className="w-3 ml-8" alt="figure" />
              <div className="ml-8">
                <a href="#" className="typo-intro text-white">підтримати ресурс</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
