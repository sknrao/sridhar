import React from 'react';
import PropTypes from 'prop-types';

const Pub = ({ data }) => (
  <article className="pub-container">
    <header>
      <h4 className="pub">{data.title}</h4>
      <h3 className="author">{data.authors}</h3>
      <p className="pubtitle"><a href={data.link}>{data.publisher}</a>, {data.year}</p>
    </header>
  </article>
);

Pub.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Pub;
