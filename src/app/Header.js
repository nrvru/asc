import React from 'react';

const Header = () => (
  <header className="main-header">
    <a href="#" className="logo">
      <span className="logo-lg">
        <b>ASC</b>
      </span>
    </a>
    <nav className="navbar navbar-static-top" role="navigation">
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <span className="hidden-xs">User Name</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
