import React from 'react'
import { ImageFullWidthWithDescription } from '../ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import { AISActionButton } from '../../ui-elements/AISActionButton'
import './Article.css'


export class Article extends React.Component {
    render() {
      const { title, subheader, children, imageUrl } = this.props
      return (
        <div>
          <ImageFullWidthWithDescription title={title} textContent={subheader} imageUrl={imageUrl}>
            <AISActionButton text="ENTRE EM CONTATO AGORA" url="/quem-somos" eventType='ARTICLE_CONTATO_AGORA'/>
          </ImageFullWidthWithDescription>
          <div className="article-subheader">

          </div>
          <div className="article-body">
            {children}
          </div>
        </div>
      )
    }
}
