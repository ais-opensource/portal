import React from 'react'
import { Article } from '../../content/Article/Article'
import { AISHelmet } from '../../utilities/AISHelmet/AISHelmet'
import './Serios.css'

export class Serios extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  renderConteudo() {
    return (
      <div>
        <p className="paragraph">
          Jogos sérios visam simular situações, com o objetivo de proporcionar o treinamento de profissionais,
          criando um gatilho para tomada de decisão em situações críticas.
        </p>
        <p className="paragraph">
          O conceito de jogos sérios, aliados as capacidades da realidade virtual,
          permitem que o usuário responda de forma interativa as situações criadas
          no ambiente virtual controlado.
        </p>
        <p className="paragraph">
          Todo treinamento que possua riscos intrínsicos ou necessidade de movimentos
          específicos podem se beneficiar desta tecnologia, como por exemplo:
          segurança no trabalho, militar, esportivo, médico e até mesmo o espacial.
        </p>
      </div>
    )
  }
  render() {
    const title='Jogos Sérios'
    const subheader='Treine a sua equipe com mais segurança e menos custo'
    const imageUrl='http://ambientesvirtuais.com/treinamento-incendio-fora.png'
    return (
      <div>
        <AISHelmet
          imageContent={imageUrl}
          title={title}
          description={subheader}
          url='http://www.ambientesvirtuais.com/jogos-serios'
        />
        <Article
          title={title}
          subheader={subheader}
          imageUrl='https://s3.amazonaws.com/ais-image-bank/treinamento-incendio-fora.png'
        >
          {this.renderConteudo()}
        </Article>
      </div>
    )
  }
}
