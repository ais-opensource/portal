import React from 'react'
import './RedesSociais.css'
export class RedesSociais extends React.Component {

  render() {
    return (

      <ul className="social-media-container">
        <div className="social-media-description">
          Confira nossas redes sociais:
        </div>
        <li className="social-media-item">
          <a classname="social-media-anchor" href="https://www.facebook.com/realidadevirtualais" target="_blank"><i className="fa fa-facebook social-media-icon"></i></a>
        </li>
        <li className="social-media-item">
          <a classname="social-media-anchor" href="https://www.instagram.com/ambientesvirtuais/?hl=en" target="_blank"><i className="fa fa-instagram social-media-icon"></i></a>
        </li>
      </ul>
    )
  }
}
