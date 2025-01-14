import React from 'react';
import PropTypes from 'prop-types';

import Highlight from './Highlights/Highlight';

const Highlights = ({ data }) => (
  <div className="education">
    <div className="link-to" id="highlights" />
    <div className="title">
      <h3>Highlights</h3>
    </div>
    {data.map((highlight) => (
      <Highlight
        data={highlight}
        key={highlight.title}
      />
    ))}
  </div>
);

Highlights.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
    year: PropTypes.string,
  })),
};

Highlights.defaultProps = {
  data: [],
};

export default Highlights;
