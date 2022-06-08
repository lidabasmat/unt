import React from 'react';
import PropTypes from '../../utils/PropTypes';

const YoutubeIframe = ({ id, className }) => (
  <div className={className}>
    <div className="relative pb-[56%] w-full">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        title="Seqera Video"
      />
    </div>
  </div>
);

YoutubeIframe.propTypes = {
    id: PropTypes.string.isRequired,
};

export default YoutubeIframe;
