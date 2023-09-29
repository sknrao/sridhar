import React from 'react';
import PropTypes from 'prop-types';

const Talk = ({ data, last }) => (
  <li className="course-container">
    <a href={data.link}>
      <h4 className="course-number">{data.title}:</h4>
      <p className="course-name">{data.desc}</p>
    </a>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

Talk.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Talk.defaultProps = {
  last: false,
};

export default Talk;
