import React from 'react';
import PropTypes from 'prop-types';

const Highlight = ({ data, last }) => (
  <li className="course-container">
    <h4 className="course-number">{data.title}</h4>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

Highlight.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Highlight.defaultProps = {
  last: false,
};

export default Highlight;
