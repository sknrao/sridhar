import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Publication from '../components/Resume/Publication';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Talks from '../components/Resume/Talks';
import Highlights from '../components/Resume/Highlights';
// import References from '../components/Resume/References';

import talks from '../data/resume/talks';
import highlights from '../data/resume/highlights';
import degrees from '../data/resume/degrees';
import pubs from '../data/resume/pubs';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Highlights: () => <Highlights data={highlights} />,
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Talks: () => <Talks data={talks} />,
  Publication: () => <Publication data={pubs} />,
  // References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Sridhar's Resume. The Linux Foundation, Spirent, NEC, I2R, Politecnico Di Turin, NUS, HFCL."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
