import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className='about'>
      <p className='about-intro'>
        Hi! I am <span>Gavin Hon</span>
      </p>
      <h1 className='about-highlight'>
        I specialize in presales and software development.
      </h1>
      <p className='about-des'>
        I develop proof-of-concepts based on customer requirements, provide
        technical support for backend infrastructure or cloud and frontend
        development. Currently, I am a Presales Engineer at{' '}
        <a
          title='https://hexagon.com/company/divisions/safety-infrastructure-geospatial'
          href='https://hexagon.com/company/divisions/safety-infrastructure-geospatial'
          target='_blank'
          rel='noopener noreferrer'
        >
          Hexagon
        </a>
        .
      </p>
      <Link to='/works' className='navlink about-button'>
        Work Experience
      </Link>
    </div>
  );
}

export default About;
