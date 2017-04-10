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
          <ul className="nav navbar-nav app-header-link-list pull-right">
            <li><a href="">Produtos</a></li>
            <li><a href="">Contato</a></li>
            <li><a href="">Suporte</a></li>
            <li><a href="">Carreira</a></li>
          </ul>
        </div>
        <div className="chocolate">
        </div>
      </nav>
    )
  }
}
