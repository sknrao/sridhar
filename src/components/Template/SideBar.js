import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Sridhar K. N. Rao</h2>
        <p><a href="mailto:sridharkn@u.nus.edu">sridharkn@u.nus.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Sridhar, a professional with a PhD from <a href="https://www.comp.nus.edu.sg/"> NUS, Singapore</a>. I am currently working as Senior Architect at <a href="https://linuxfoundation.org">The Linux Foundation</a>. I have over 25 years of experience in the field of Computer Networking, of which more than 16 years in Industry. Over past 13-years, I have been working as a hands-on Architect in the domain of SDN-NFV with  <a href="https://spirent.com">Spirent</a>, and <a href="https://nec.com">NEC India</a> NEC and Spirent. In NFV-SDN ecosystem, I have been part of vendor, test-and-measurement, standardization, research, and opensource communities, working on the challenges faced by service-providers across the globe. At Spirent, I was consulting on Multi-Vendor Edge-Cloud Deployments, End-2-End Test Automation for India/APAC Telco(s). Prior to Spirent and NEC, I worked as Research Fellow at <a href="https://www.polito.it/en">Microsoft Innovation Center</a>, Politecnico Di Torino, Italy and <a href="https://www.a-star.edu.sg/i2r">Institute for Infocomm Research</a> Singapore.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Sridhar K. N. Rao <Link to="/">theraos.in</Link>.</p>
    </section>
  </section>
);

export default SideBar;
