import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/store">
        Add Reference Book
      </a>

      <a className="menu-item" href="/laravel">
        Add Past Paper
      </a>

      <a className="menu-item" href="/angular">
        Available resources
      </a>

      <a className="menu-item" href="/react">
        Send NewsLetters
      </a>

      <a className="menu-item" href="/vue">
        Reports
      </a>

    </Menu>
  );
};
