import React, { useState } from 'react'

import { CoverStyle, ImageListStyle, ProductImagesStyle } from './ProductStyle'

const images = [
  'https://images.kabum.com.br/produtos/fotos/211090/jogo-fifa-22-br-ps5_1629377819_gg.jpg',
  'https://img.olhardigital.com.br/wp-content/uploads/2021/09/fifa-22.jpg',
  'https://tm.ibxk.com.br/2021/10/05/05164344193348.jpg',
  'https://s2.glbimg.com/TrF7s5LYYvGW1hMF4eq25CADP5E=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/6/n/pymiQoRcuZsmUoHzPPCQ/lancamentos-semana-fifa-22-ultimate-ps5-xbox-series-x-s.jpg'
]

const ProductImages = () => {
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
