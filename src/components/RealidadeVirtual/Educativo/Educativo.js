import React from 'react'
import { Article } from '../../content/Article/Article'
import { ImageFullWidth } from '../../content/ImageFullWidth/ImageFullWidth'
import './Educativo.css'


export class Educativo extends React.Component {
    componentDidMount() {
      window.scrollTo(0,0)
    }
    renderConteudo() {
      return (
        <div>
          <p className="paragraph">
            O projeto de plataforma de realidade virtual para ensino, descreve um ambiente virtual imersivo
            onde o aluno irá aprender e se maravilhar com a tecnologia ao mesmo tempo.
          </p>
          <p className="paragraph">
            Ao analisarmos as melhores práticas pedagógicas, o ser humano tem seu aprendizado facilitado com experiências marcantes sensoriais.
            Este fenômeno sempre foi observado e praticado na educação, mas com altos custos na montagem de laboratórios e com a quantidade mínima de
            equipamentos necessários para a transmissão de conhecimento. Ainda que e ciente, este modelo é caro e depende de altos investimentos e
            complexidades logísticas para sua capilarização em território nacional.
          </p>
        
          <br />
          <p className="paragraph">
            Nesta parte, a realidade virtual emula os mesmos impactos positivos,
            pois possibilita a imersão do aluno em um ambiente controlado e
            artificialmente simulado onde há condições ideias para maximizar a absorção
            e  fixação do conhecimento, seja por meio visualizações 3D
            de alta qualidade ou até mesmo através da possibilidade de vivenciar o ambiente
            e situações que na realidade seriam impossíveis ou inviáveis.
          </p>
        </div>
      )
    }
    render() {
      return (
        <div>
          <Article
            title='Conteúdo educativo imersivo'
            subheader='Aumente o rendimento e a taxa de aprendizado de alunos em até 90%'
            imageUrl='./educativo-imersivo.jpeg'
            body={this.renderConteudo()}
          />
        </div>
      )
    }
}
