import React from 'react'
import { Article } from '../../content/Article/Article'
import { ImageFullWidth } from '../../content/ImageFullWidth/ImageFullWidth'
import './Maquetes.css'

export class Maquetes extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  renderConteudo() {
    return (
      <div>
        <p className="paragraph">
          Esse projeto propõem a apresentação por meio de modelos 3D que são executados em tempo real,
          de um passeio por uma residência ou projeto arquitetônico já construído ou não, sendo então possível visualizar a disposição espacial de uma residência
          antes que ela  que concluída.
          Esse tipo de sistema também permite uma  ltragem para corretores que precisam apresentar vários imóveis para clientes, assim economizando tempo.
        </p>
        <p className="paragraph">
          Por ser um sistema construído em um motor de jogos, ele executa os modelos 3D em tempo real, isso permite a inserção de interações durante a visualização arquitetônica.
        </p>
      </div>
    )
  }
  render() {
    return (
      <div>
        <Article
          title='Desenvolvimento de maquetes Virtuais'
          subheader='Visualize projetos em tours virtuais'
          body={this.renderConteudo()}
          imageUrl='./maquete-digital.jpeg'
        />
      </div>
    )
  }
}
