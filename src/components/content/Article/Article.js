import React from 'react'
import { ImageFullWidthWithDescription } from '../ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import { EmailGatherer } from '../../ui-elements/EmailGatherer'
import './Article.css'


export class Article extends React.Component {
    render() {
      const { title, subheader, children, imageUrl } = this.props
      return (
        <div>
          <ImageFullWidthWithDescription title={title} textContent={subheader} imageUrl={imageUrl}>
            <EmailGatherer
              label="Descubra como utilizar a tecnologia para aumentar os seus resultados"
              placeholder="seuemail@provedor.com"
              submitText="Quero uma consultoria gratuita"
              method='EMAIL_GATHERER_OUTDOOR_VIRTUAL'
            />
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
