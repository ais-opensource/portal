import React from 'react';
import './Header.css'
export class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default app-header">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <div className="logo"></div>
            </a>
          </div>
          <div className="header-container">
            <div className="header-item"><a href="/">Produtos</a></div>
            <div className="header-item"><a href="/ais/#contato">Contato</a></div>
            <div className="header-item"><a href="/ais/#carreira">Carreira</a></div>
          </div>
        </div>
      </nav>
    )
  }
}
