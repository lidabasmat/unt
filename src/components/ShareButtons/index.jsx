import React from 'react';
import PropTypes from '../../utils/PropTypes';

import FacebookIcon from '../icons/FacebookIcon';
import TwitterIcon from '../icons/TwitterIcon';

import Link from '../Link';

const ShareButtons = ({ className, title, url }) => (
  <div className={className}>
    <div className="flex">
      <Link to={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
        <FacebookIcon className="h-8 w-8" />
      </Link>
      <Link to={`https://twitter.com/intent/tweet?url=${url}&text=${title}`} className="ml-4">
        <TwitterIcon className="h-8 w-8" />
      </Link>
    </div>
  </div>
);

ShareButtons.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

ShareButtons.defaultProps = {
  className: '',
};

export default ShareButtons;
