import React from "react";

const Header = () => {
  return (
    <header className='row block center'>
      <div>
        <a href='/'>
          <h1>Simple Shopping Cart</h1>
        </a>
      </div>
      <div className='links'>
        <a href='/cart'>Cart</a>
        <a href='/signin'>SignIn</a>
      </div>
    </header>
  );
};

export default Header;
