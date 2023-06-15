import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className='content-container'>
    <footer id='footer d-flex'>
      <div className='row w-100'>
        <div className='col-8 social-media-links'>
          <ul className='list-inline list-unstyled'>
            <li className='list-inline-item'>You can also find me here:</li>
            <li className='list-inline-item'>
              <a href='https://raweggdevelopment.itch.io' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faItchIo} />
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='mailto:brazen.abelgas@gmail.com' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li className='list-inline-item'>
              <a
                href='https://www.linkedin.com/in/brazenabelgas/'
                rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='https://github.com/Xzygon/' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          <p>
            <small className='font-weight-light'>
              Copyright {new Date().getFullYear()} &copy;&nbsp;
              <a href='https://www.brazenabelgas.com' rel='noopener noreferrer' className='font-weight-bold'>
                Brazen Abelgas
              </a>
              . All rights reserved.
            </small>
          </p>
        </div>
        <div className='col-4 text-end'>
          <a href='#'>Back to top</a>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
