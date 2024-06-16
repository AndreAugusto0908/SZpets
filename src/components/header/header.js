import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>SZpets</h1>
      </div>
      <div className="header-right">
        <button className="cart-button">Carrinho</button>
        <button className="about-button">Sobre Nós</button>
      </div>
    </div>
  );
};

export default Header;