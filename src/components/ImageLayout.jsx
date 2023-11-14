import React from 'react'
import './ImageLayout.css'

const ImageLayout = () => {
  return (
    <div className="images-wrap">
      <div className="image1">
        <img src="images/image1.jpeg" alt="" />
      </div>
      <div className="image2 image3">
        <img src="images/image2.jpeg" alt="" />
        <img src="images/image3.jpeg" alt="" />
      </div>
      <div className="image4">
        <img src="images/image4.jpeg" alt="" />
      </div>
    </div>
  )
}

export default ImageLayout
