import React from 'react'
import { ImageFullWidthWithDescription } from '../ImageFullWidthWithDescription/ImageFullWidthWithDescription'
import './Article.css'


export class Article extends React.Component {
    render() {
      const { title, subheader, body, imageUrl } = this.props
      return (
        <div>
          <ImageFullWidthWithDescription textContent={title} imageUrl={imageUrl}/>
          <div className="article-subheader">
            {subheader}
          </div>
          <div className="article-body">
            {body}
          </div>
        </div>
      )
    }
}
