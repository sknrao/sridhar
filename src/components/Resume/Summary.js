import React from 'react';
import { Link } from 'react-router-dom';

const Summary = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <Link to="/contact">
        <h3>Summary</h3>
      </Link>
    </div>
    <p> A Professional with a PhD from NUS</p>
  </div>
);

export default Summary;
