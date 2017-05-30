import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = ({props}) => {
  return (
    <footer className="footer">
      <div className="contents">
        <Link className="contents-title" to="/360">360 graus</Link>
        <div className="contents-link"><Link to="/360#google-maps">Google Maps</Link></div>
        <div className="contents-link"><Link to="/fotos-360">Fotos 360</Link></div>
        <div className="contents-link"><Link to="/videos-360">Vídeos 360</Link></div>
      </div>
      <div className="contents">
        <Link className="contents-title" to="/realidade-aumentada">Realidade Aumentada</Link>
        <div className="contents-link"><a href="/realidade-aumentada/#caca-noel">Caça Noel</a></div>
        <div className="contents-link"><a href="/realidade-aumentada/#pascoa-virtual">Páscoa Virtual</a></div>
        <div className="contents-link"><a href="/realidade-aumentada/#outdoor">Outdoor</a></div>
      </div>
      <div className="contents">
        <Link className="contents-title" to="/realidade-virtual">Realidade Virtual</Link>
        <div className="contents-link"><a href="/promocoes-turisticas">Promoções Turísticas</a></div>
        <div className="contents-link"><a href="/maquetes-digitais">Desenvolvimento de Maquetes Virtuais</a></div>
        <div className="contents-link"><a href="/jogos-publicitarios">Jogos Publicitários</a></div>
        <div className="contents-link"><a href="/jogos-serios">Jogos Sérios</a></div>
        <div className="contents-link"><a href="/educativo">Conteúdo Educativo Imersivo</a></div>
      </div>
      <div className="contents">
      <Link className="contents-title" to="/quem-somos">AIS - Ambientes Virtuais</Link>
        <div className="contents-link"><a href="/quem-somos">Contato</a></div>
      </div>
    </footer>
  )
}
