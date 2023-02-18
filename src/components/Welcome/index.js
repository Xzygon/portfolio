import React from 'react';

import images from '../../assets/images';
import resume from '../../Brazen_Abelgas_Resume.pdf';

const Welcome = () => {
  return (
    <div className='content-container' id='welcome'>
      <div className='row'>
        <div className='col-12 col-md-8 order-2 order-md-1'>
          <div className='welcome-message'>
            <h1 className='display-2'>
              Hey there!
            </h1>
            <p className='lead'>
              I'm <span className='fw-bold'>Brazen Abelgas</span>, a{' '}
              <span className='fw-bold'>Unity Software Engineer</span>
              {' '}from <span className='fw-bold'>California</span>. I
              design and code software and video games using{' '}
              <span className='fw-bold'>Unity</span>,{' '}
              <span className='fw-bold'>Maya3D</span>,{' '}
              <span className='fw-bold'>MySQL</span> and{' '}
              <span className='fw-bold'>Parse</span>. If
              you've got something in the works that needs to be done, then I
              might just turn out to be the right fit for the job! Hit me up at{' '}
              <span className='anchor-fancy'>
                <a href='mailto:brazen.abelgas@gmail.com' rel='noopener noreferrer'>
                  brazen.abelgas@gmail.com
                </a>
              </span>
              {' '} and maybe we can work something out!
            </p>
            <a
              target='_blank'
              href={resume}
              rel='noopener noreferrer'
              className='btn button-shadow mr-2'>
              Download Resume
            </a>
          </div>
        </div>
        <div className='col-12 col-md-4 order-1 order-md-2 text-center text-right'>
          <img src={images.brazen} alt='' className='img-fluid img-me' />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
