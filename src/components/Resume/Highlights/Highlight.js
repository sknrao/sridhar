import React from 'react';
import PropTypes from 'prop-types';

const Highlight = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.title}</h4>
    </header>
  </article>
);

Highlight.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Highlight;
