import React from "react";

const Header = ({ cartItems }) => {
  return (
    <header className='row block center'>
      <div>
        <a href='/'>
          <h1>Simple Shopping Cart</h1>
        </a>
      </div>
      <div className='links'>
        <a href='/cart'>Cart</a>
        <button className='badge'>{cartItems.length}</button>
        <a href='/signin'>SignIn</a>
      </div>
    </header>
  );
};

export default Header;
