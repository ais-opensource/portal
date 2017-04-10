import React from 'react';
import './VRImageFullWidth.css';

export class VRImageFullWidth extends React.Component {

  render(){
    const { imageUrl, rotation } = this.props
    return (
      <div className="container-fluid">
        <div className="row vr-container">
          <a-scene>
            <a-assets>
            </a-assets>
            <a-sky src={imageUrl} rotation={rotation}></a-sky>
          </a-scene>
        </div>
      </div>
    )
  }
}
