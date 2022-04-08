import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
import spikes from '../../assets/spikes.svg'

export function Navbar() {
  return (
    <div>
        <header class="navbars">
          <Link to=''  className="menu-icon">
            <img src={spikes} width="40px" height="40px" alt="logo" />
          </Link>
          <Link to='/'  className="brand-name h6">
              Psych!
          </Link>
          <nav>
            <li className="list-items">
            <Link to='/rules' class="secondary-link">
              Guidelines
            </Link>
            </li>
          </nav>
        </header>

    </div>
  )
}
