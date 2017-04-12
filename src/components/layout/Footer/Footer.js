import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = ({props}) => {
  return (
    <footer className="footer">
      <div className="contents">
        <Link className="contents-title" to="/360">360 graus</Link>
        <div className="contents-link"><Link to="/">Google Maps</Link></div>
        <div className="contents-link"><Link to="/fotos-360">Fotos</Link></div>
        <div className="contents-link"><Link to="/videos-360">Vídeos</Link></div>
      </div>
      <div className="contents">
        <Link className="contents-title" to="/realidade-aumentada">Realidade Aumentada</Link>
        <div className="contents-link"><a href="/realidade-aumentada/#caca-noel">Caça Noel</a></div>
        <div className="contents-link"><a href="/realidade-aumentada/#pascoa-virtual">Páscoa Virtual</a></div>
        <div className="contents-link"><a href="/realidade-aumentada/#outdoor">Outdoor</a></div>
      </div>
      <div className="contents">
        <Link className="contents-title" to="/realidade-virtual">Realidade Virtual</Link>
        <div className="contents-link"><a href="">Promoções Turísticas</a></div>
        <div className="contents-link"><a href="">Desenvolvimento de Maquetes Virtuais</a></div>
        <div className="contents-link"><a href="">Jogos Publicitários</a></div>
        <div className="contents-link"><a href="">Jogos Sérios</a></div>
        <div className="contents-link"><a href="">Conteúdo Educativo Imersivo</a></div>
      </div>
      <div className="contents">
      <Link className="contents-title" to="/quem-somos">AIS - Ambientes Virtuais</Link>
        <div className="contents-link"><a href="">Quem somos</a></div>
        <div className="contents-link"><a href="">Carreira</a></div>
      </div>
    </footer>
  )
}
