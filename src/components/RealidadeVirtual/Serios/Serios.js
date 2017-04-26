import React from 'react'
import { Article } from '../../content/Article/Article'
import { ImageFullWidth } from '../../content/ImageFullWidth/ImageFullWidth'
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
    return (
      <div>
        <Article
          title='Jogos Sérios'
          subheader='Treine a sua equipe com mais segurança e menos custo'
          body={this.renderConteudo()}
          imageUrl='./treinamento-incendio-fora.png'
        />
      </div>
    )
  }
}
