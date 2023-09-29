import React from 'react';
import PropTypes from 'prop-types';

import Talk from './Talks/Talk';

const getRows = (talks) => talks.sort((a, b) => {
  let ret = 0;
  if (a.number > b.number) ret = 1;
  return ret;
}).map((talk, idx) => (
  <Talk
    data={talk}
    key={talk.title}
    last={idx === talks.length - 1}
  />
));

const Talks = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="talks" />
    <div className="title">
      <h3>Selected Talks</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

Talks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    number: PropTypes.string,
    link: PropTypes.string,
    desc: PropTypes.string,
  })),
};

Talks.defaultProps = {
  data: [],
};

export default Talks;
