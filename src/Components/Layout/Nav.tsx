import React from 'react';
import Logo from '../Data_display/Logo';
import ButtonToogle from '../Data_display/ButtonToogle';
import Menu from '../Navigation/Menu';

function Nav(props) {
  return (
    <nav className='bg-white'>
      <div className='max-w-screen-xl'>
        <a href="">
          <Logo />
        </a>
        <ButtonToogle />
        <Menu />
      </div>
    </nav>
  );
}

export default Nav;