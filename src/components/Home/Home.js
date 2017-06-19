import React from 'react'
import AOS from 'aos'
import { ImageFullWidthWithDescription } from '../content/ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import { HalfImageHalfTextLeft } from '../content/HalfImageHalfTextLeft/HalfImageHalfTextLeft'
import { HalfImageHalfTextRight } from '../content/HalfImageHalfTextRight/HalfImageHalfTextRight'
import { Customers } from '../customers/Customers'
import { AISActionButton } from '../ui-elements/AISActionButton'
import './Home.css';
import '../../../node_modules/aos/dist/aos.css';
export class Home extends React.Component {

  constructor(props) {
    super(props)
    AOS.init({
      disable: 'mobile'
    });

  }
  componentDidMount() {
    window.scrollTo(0,0)
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
          imageUrl='./predios-meio-futuristas.jpeg' title='Ambientes virtuais, emoções reais'
          textContent='Criando experiencias de realidade virtual e aumentada para unificar mundos'
          >
          <div className="home-action-buttons-container">
            <AISActionButton text="EXPERIMENTE AGORA" url="/fotos-360" />
            <AISActionButton text="SAIBA MAIS" id="realidade-aumentada"/>
          </div>

          </ImageFullWidthWithDescription>
        <Customers customers={customers} />
        <HalfImageHalfTextLeft
          title='Realidade Aumentada'
          id="realidade-aumentada"
          imageUrl='./background-ra.jpg'
          imageDescription="Imagem representando a realidade aumentada"
          content='Projeções de modelos 3D interativos no mundo real'
          buttonUrl='/realidade-aumentada'
        >
        <div data-aos="slide-left" data-aos-duration="600">
          <img className="dinossauro-celular" src='./mockup-celular.png' alt='representação de realidade aumentada' />
        </div>
        <div data-aos="zoom-out" data-aos-delay="800">
          <img className="dinossauro-ra" src='./dinozito.png' alt='imagem 3d representando o objeto virtual de ra' />
        </div>
        </HalfImageHalfTextLeft>
        <HalfImageHalfTextRight
          title='Realidade Virtual'
          imageUrl='./virtual-reality-homem.jpeg'
          imageDescription="Imagem representando a realidade virtual"
          content='Desenvolvimento de aplicações em realidade virtual para melhorar a experiência do usuário.'
          buttonUrl='/realidade-virtual'
          backgroundColor="#000000"
        />
        <HalfImageHalfTextLeft
          title='Conteúdo 360'
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
