import * as React from 'react';
import Link from '../components/Link';

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-10">
        <div className="container-lg">
          <div className="flex items-center justify-between">
            <small className="typo-small">
              &copy; 2022 УНТ
            </small>
            <Link to="/privacy/" className="typo-small">
              Політика конфіденційності
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
