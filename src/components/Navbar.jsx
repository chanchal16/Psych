import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css'

export function Navbar() {
  return (
    <div>
        <header class="navbars">
            <Link to='/'  className="brand-name h6">
                Psych!
            </Link>
            <nav>
              <Link to='/rules' class="secondary-link">
                Guidelines
              </Link>
            </nav>
        </header>

    </div>
  )
}
