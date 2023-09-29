import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Sridhar's personal website. a NUS SoC graduate (Ph.D), and Senior Architect at The Linux Foundation. "
    + 'Senior Architect at Spirent, and NEC India, and Research Fellow at Microsoft Innovation Center, Politecnico Di Torino, Italy and Institute for Infocomm Research Singapore'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Namaskara, Hello</Link></h2>
          <p>
            To love oneself is the beginning of a lifelong romance - Oscar Wilde
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
