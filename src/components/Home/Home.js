import React from 'react'
import { ImageFullWidthWithDescription } from '../content/ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import { HalfImageHalfTextLeft } from '../content/HalfImageHalfTextLeft/HalfImageHalfTextLeft'
import { HalfImageHalfTextRight } from '../content/HalfImageHalfTextRight/HalfImageHalfTextRight'
import { VRImageFullWidth } from '../content/VRImageFullWidth/VRImageFullWidth'
import { Customers } from '../customers/Customers'

export class Home extends React.Component {

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
          imageUrl={'./vr-headset-woman.png'}
          title='MÍDIA 360'
          buttonUrl='/360'
        />


          <Customers customers={customers} />


        <HalfImageHalfTextRight
          title='Realidade Aumentada'
          imageUrl='./ra-sketch.png'
          imageDescription="Imagem representando a realidade aumentada"
          content='Projeções de modelos 3D iterativos no mundo real'
          buttonUrl='/realidade-aumentada'
        />
        <HalfImageHalfTextLeft
          title='Realidade Virtual'
          imageUrl='./vr-sketch.png'
          imageDescription="Imagem representando a realidade virtual"
          content='Desenvolvimento de aplicações em realidade virtual para melhorar a experiência do usuário.'
          buttonUrl='/realidade-virtual'
          backgroundColor="#000000"
        />
      </div>
    )
  }
}
