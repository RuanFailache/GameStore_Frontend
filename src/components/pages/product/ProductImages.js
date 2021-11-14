import React, { useState } from 'react'

import { CoverStyle, ImageListStyle, ProductImagesStyle } from './ProductStyle'

const ProductImages = ({ images }) => {
  const [actualImage, setActualImage] = useState(images[0])

  return (
    <ProductImagesStyle>
      <CoverStyle src={actualImage} alt="" />

      <ImageListStyle>
        {images.map((image, key) => (
          <li key={key} onClick={() => setActualImage(image)}>
            <img src={image} alt='' />
          </li>
        ))}
      </ImageListStyle>
    </ProductImagesStyle>
  )
}

export default ProductImages
