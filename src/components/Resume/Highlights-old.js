import React from 'react';
import PropTypes from 'prop-types';

import Highlight from './Highlights/Highlight';

const getRows = (highlights) => highlights.sort((a, b) => {
  let ret = 0;
  if (a.value > b.value) ret = -1;
  else if (a.year > b.year) ret = 1;
  return ret;
}).map((highlight, idx) => (
  <Highlight
    data={highlight}
    key={highlight.title}
    last={idx === highlights.length - 1}
  />
));

const Highlights = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="highlights" />
    <div className="title">
      <h3>Highlights</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
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
