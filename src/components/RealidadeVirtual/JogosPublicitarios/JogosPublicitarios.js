import React from 'react'
import { Article } from '../../content/Article/Article'
import './JogosPublicitarios.css'
import { AISHelmet } from '../../utilities/AISHelmet/AISHelmet'

export class JogosPublicitarios extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  renderConteudo() {
    return (
      <div>
        <p className="paragraph">
          Cada vez mais as pessoas estão expostas a uma maior quantidade de informações.
          Devido a este excesso, torna-se difícil reter o público assistindo algum comercial, comoera feito antigamente.
        </p>
        <p className="paragraph">
          A utilização de jogos para divulgação de marcas é amplamente utilizada pelas grandes empresas de marketing atualmente.
          O objetivo deste aplicativo é chamar a atenção para a marca e liga-la a sensações que intensifiquem o consumo.
        </p>
        <p className="paragraph">
          Unindo os conceitos de jogos publicitários e realidade virtual, é possível intensificar as sensações
          já proporcionadas normalmente pelo jogo, através da imersão.
        </p>
      </div>
    )
  }
  render() {
    const title='Jogos Publicitários'
    const subheader='Conecte sua marca a sensações únicas através de conteúdo digital em realidade virtual a aumentada'
    const imageUrl='http://ambientesvirtuais.com/jogos-publicitarios.jpeg'
    return (
      <div>
        <AISHelmet
          imageContent={imageUrl}
          title={title}
          description={subheader}
          url='http://www.ambientesvirtuais.com/jogos-publicitarios'
        />
        <Article
          title={title}
          subheader={subheader}
          imageUrl='https://s3.amazonaws.com/ais-image-bank/jogos-publicitarios.jpeg'
        >
          {this.renderConteudo()}
        </Article>
      </div>
    )
  }
}
