import React from 'react'
import { Article } from '../../content/Article/Article'
import { AISHelmet } from '../../utilities/AISHelmet/AISHelmet'
import './Promocoes.css'

export class Promocoes extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  renderConteudo() {
    return (
      <div>
        <p className="paragraph">
          Dispositivos de realidade virtual pretendem transformar diversos setores nos próximos anos,
          já que as maiores empresas mundiais (Facebook, Google, Sony, Samsung etc) estão investindo milhões de dólares nesta tecnologia.
        </p>
        <p className="paragraph">
          O turismo é um dos setores que mais estão se transformando, atualmente a utilização de realidade virtual para a promoção de locais
          turisticos está sendo um sucesso total, sendo retratada aumentos exorbitantes nos lucros. Para o Reino Unido e a Alemanha de 40% no retorno do
          investimento até 190% no crescimento dos lucros para excurções na cidade de Nova York.
        </p>
      </div>
    )
  }
  render() {
    const title='Promoções Turísticas'
    const subheader='Atraia mais clientes para o seu negócio e melhore a experiência turística deles'
    const imageUrl='http://ambientesvirtuais.com/town-on-rocks-by-sea.jpeg'
    return (
      <div>
        <AISHelmet
          imageContent={imageUrl}
          title={title}
          description={subheader}
          url='http://www.ambientesvirtuais.com/promocoes-turisticas'
        />
        <Article
          title={title}
          subheader={subheader}
          imageUrl={imageUrl}
        >
          {this.renderConteudo()}
        </Article>
      </div>
    )
  }
}
