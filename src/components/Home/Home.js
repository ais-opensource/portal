import React from 'react'
import { ImageFullWidthWithDescription } from '../content/ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import { HalfImageHalfTextLeft } from '../content/HalfImageHalfTextLeft/HalfImageHalfTextLeft'
import { HalfImageHalfTextRight } from '../content/HalfImageHalfTextRight/HalfImageHalfTextRight'
import { Customers } from '../customers/Customers'
import './Home.css'
export class Home extends React.Component {

  _renderApresentacaoText() {
    return (
      <div>
        <div className="transformando animated fadeInLeft">
          Transformando as pessoas...
        </div>
        <div className="exploradores animated fadeInLeft">
          Em exploradores de novos mundos
        </div>
      </div>
    )
  }
  render() {
    const customers = [
      {
        imageUrl: './logos/logo-itaipu.jpeg',
        url: 'https://www.itaipu.gov.br/en',
      },
      {
        imageUrl: './logos/logo-jl.png',
        url: 'http://www.cataratasjlshopping.com.br',
      },
      {
        imageUrl: './logos/logo-incubadora.jpeg',
        url: 'https://www.pti.org.br/incubadorasantosdumont/#.WMK_ERB0jxh',
      },
      {
        imageUrl: './logos/logo-pti.jpeg',
        url: 'http://www.pti.org.br',
      },
      {
        imageUrl: './logos/logo-wolf.png',
        url: 'https://www.facebook.com/Cfiguassu/',
      },
      {
        imageUrl: './logos/logo-rede.png',
        url: 'http://www.redeoutdoor.com.br/',
      },
      {
        imageUrl: './logos/logo-ticket-loko.png',
        url: 'http://ticketloko.com/'
      },
      {
        imageUrl: './logos/logo-woods.png',
        url: 'http://www.woodsbar.com.br/fozdoiguacu'
      }
    ]
    return (
      <div>
        <ImageFullWidthWithDescription
          imageUrl={'./predios-meio-futuristas.jpeg'}
          textContent={this._renderApresentacaoText()}
        />

        <Customers customers={customers} />
        <HalfImageHalfTextRight
          title='Realidade Aumentada'
          imageUrl='./realidade-aumentada-celular.jpeg'
          imageDescription="Imagem representando a realidade aumentada"
          content='Projeções de modelos 3D iterativos no mundo real'
          buttonUrl='/realidade-aumentada'
        />
        <HalfImageHalfTextLeft
          title='Realidade Virtual'
          imageUrl='./virtual-reality-homem.jpeg'
          imageDescription="Imagem representando a realidade virtual"
          content='Desenvolvimento de aplicações em realidade virtual para melhorar a experiência do usuário.'
          buttonUrl='/realidade-virtual'
          backgroundColor="#000000"
        />
        <HalfImageHalfTextRight
          title='Mídia 360'
          imageUrl='./oculus.jpeg'
          imageDescription="Óculos de realidade virtual sobre uma mesa"
          content='Filmagem, fotografia e edição de mídias 360'
          buttonUrl='/360'
          backgroundColor="#000000"
        />

      </div>
    )
  }
}
