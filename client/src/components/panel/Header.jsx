import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Header = () => {
  return (
    <header className="topo">
      <div className="topo-conteudo">
        <Link className="topo-box" to="/">
          <img className="topo-logo" src="./logo192.png" alt="logo app" title="logo app"/>
          <p className="topo-nome-empresa">Project App</p>
        </Link>

        <nav className="topo-links">
          <Link className="topo-link" to="/">Home</Link>
          <Link className="topo-link" to="/painel">Painel</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;