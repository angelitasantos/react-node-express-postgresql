import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Footer = () => {
    return (
        <footer className="rodape">
            <div className="rodape-container">
                <nav className="rodape-links">
                    <Link className="rodape-link" to="/">Suporte</Link>
                    <Link className="rodape-link" to="/">Manual</Link>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;