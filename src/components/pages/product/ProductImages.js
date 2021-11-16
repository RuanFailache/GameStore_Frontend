import React, { useState } from 'react'

import { CoverStyle, ImageListStyle } from './ProductStyle'

const ProductImages = ({ images }) => {
  const [actualImage, setActualImage] = useState(images[0])

  return (
    <section>
      <CoverStyle src={actualImage} alt="" />

      <ImageListStyle>
        {images.map((image, key) => (
          <li key={key} onClick={() => setActualImage(image)}>
            <img src={image} alt='' />
          </li>
        ))}
      </ImageListStyle>
    </section>
  )
}

export default ProductImages
