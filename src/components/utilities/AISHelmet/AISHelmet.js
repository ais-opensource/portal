import React from 'react'
import { Helmet } from 'react-helmet'
export class AISHelmet extends React.Component {

  render() {
    const { imageContent, title, description, url } = this.props;
    return (
      <Helmet>
        <title>{title}</title>
        <meta property="og:image" content={imageContent}/>
        <meta property="og:title" content={'AIS Ambientes Virtuais |' + title}/>
        <meta property="og:description" content={description}/>
        <meta property="og:url" content={url}/>
        <meta property="og:type" content="website"/>
      </Helmet>
    )
  }
}
