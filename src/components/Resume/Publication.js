import React from 'react';
import PropTypes from 'prop-types';

import Pub from './Publication/Pub';

const Publication = ({ data }) => (
  <div className="publication">
    <div className="link-to" id="publication" />
    <div className="title">
      <h3>Publication</h3>
    </div>
    {data.map((pub) => (
      <Pub
        data={pub}
        key={pub.authors}
      />
    ))}
  </div>
);

Publication.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    authors: PropTypes.string,
    title: PropTypes.string,
    publisher: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Publication.defaultProps = {
  data: [],
};

export default Publication;
