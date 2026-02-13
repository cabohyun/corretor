import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="hero-header" role="banner">
            <div className="hero-overlay-dark"></div>

            <div className="hero-wrapper">
                <nav className="hero-navbar">
                    <div className="brand-group">
                        <h2 className="brand-logo">FÁBIO <span>CARVALHO</span></h2>
                    </div>
                </nav>

                <div className="hero-main">
                    <h1 className="hero-title">
                        O melhor lugar <br className="hide-mobile"/>
                        <span className="text-esmeralda">é aqui.</span>
                    </h1>

                    <p className="hero-lead">
                        Consultoria exclusiva em imóveis de alto padrão.
                    </p>

                    <div className="hero-cta">
                        <a href="#imoveis" className="btn-primary-luxury">
                            Ver Imóveis
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;