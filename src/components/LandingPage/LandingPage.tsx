import { fontSize } from '@mui/system';
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <section className='landing-section'>
      <div className='landing-bg'></div>
      <div>
        <div className='landing-content'>
          <div className='hero-sponsors'>
            <a href='https://istemanit.in/' target='_blank'>
              <img src='images/istewhite.png' alt='iste' width='100px' />
            </a>
            <h1 style={{ margin: '0 20px', color: 'white', fontSize: '32px' }}>
              &
            </h1>
            <a href='https://techcryptors.com/' target='_blank'>
              <img src='images/circle.png' alt='title-sponsor' width='100px' />
            </a>
          </div>
          <h4>
            <span style={{ fontSize: '20px' }}>Present</span>
          </h4>
          <h2>
            FLAIR <span>HAVEN</span>
          </h2>
          <h6>September 09 - September 17, 2023</h6>
          <a className='btn btn_hover' href='/register'>
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
