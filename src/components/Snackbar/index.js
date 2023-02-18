import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Snackbar = () => (
  <ul className='snackbar'>
    <li>
      <a href='mailto:brazen.abelgas@gmail.com'>
        <FontAwesomeIcon icon={faEnvelope} size='lg' />
      </a>
    </li>
    <li>
      <a href='https://www.linkedin.com/in/brazenabelgas/'>
        <FontAwesomeIcon icon={faLinkedin} size='lg' />
      </a>
    </li>
    <li>
      <a href='https://github.com/Xzygon/'>
        <FontAwesomeIcon icon={faGithub} size='lg' />
      </a>
    </li>
    <li className='snackbar-text'>Find me on:</li>
  </ul>
);

export default Snackbar;
