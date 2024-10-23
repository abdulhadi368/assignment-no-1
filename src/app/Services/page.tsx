import Link from 'next/link';
import React from 'react';
import Web_DevelopmentPage from './web-development/page';
import App_Development from './app-development/page';

const Service = () => {
  return (
    <div>
      <h1>This Is ServicePage</h1>
      <li>
        <a href="./Services/app-development">App Development</a>
      </li>
      <li>
        <a href='./Services/web-development'>Web Development</a>
      </li>
    </div>
  )
};

export default Service;
