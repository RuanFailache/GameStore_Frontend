import React from 'react'

import { ContainerStyle, ContentStyle, FilledButtonStyle, OutlineButtonStyle, PriceStyle, SideBarStyle } from '../../shared/sharedStyles';

const ProductPage = () => {
  const title = "FIFA 2022";
  const price = 299.99;
  const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

  const capa = 'https://images.kabum.com.br/produtos/fotos/211090/jogo-fifa-22-br-ps5_1629377819_gg.jpg'
  const banner = 'https://img.olhardigital.com.br/wp-content/uploads/2021/09/fifa-22.jpg'
  const image1 = 'https://tm.ibxk.com.br/2021/10/05/05164344193348.jpg'
  const image2 = 'https://s2.glbimg.com/TrF7s5LYYvGW1hMF4eq25CADP5E=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/6/n/pymiQoRcuZsmUoHzPPCQ/lancamentos-semana-fifa-22-ultimate-ps5-xbox-series-x-s.jpg'

  return (
    <ContainerStyle>
      <ContentStyle>
        <section>
          <img src={capa} alt="" />

          <ul>
            <li>
              <img src={capa} alt="" />
            </li>

            <li>
              <img src={banner} alt="" />
            </li>

            <li>
              <img src={image1} alt="" />
            </li>

            <li>
              <img src={image2} alt="" />
            </li>
          </ul>
        </section>

        <article>
          <h2>{title}</h2>
          <p>{description}</p>
        </article>
      </ContentStyle>

      <SideBarStyle>
        <PriceStyle>R$ {price}</PriceStyle>
        <p>Parcele em até 12x no <strong>cartão de credito</strong> sem juros</p>
        <FilledButtonStyle>Compre agora</FilledButtonStyle>
        <OutlineButtonStyle>Adicione ao carrinho</OutlineButtonStyle>
      </SideBarStyle>
    </ContainerStyle>
  )
}

export default ProductPage
