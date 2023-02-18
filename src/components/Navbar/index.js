import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ darkMode, handleThemeToggle }) => (
  <nav
    className={`navbar navbar-${darkMode ? 'dark' : 'light'}`}>
    <Link to='/' className='brand mr-auto'>
      <FontAwesomeIcon icon={faHome} size='sm' />
    </Link>
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item d-flex align-items-center'>
        <button onClick={handleThemeToggle} className='theme-toggle'>
          {darkMode ? (
            <FontAwesomeIcon icon={faSun} size='sm' />
          ) : (
              <FontAwesomeIcon icon={faMoon} size='sm' />
            )}
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
