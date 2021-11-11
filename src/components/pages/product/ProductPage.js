import React from 'react';

import ProductImages from './ProductImages';

import { ContainerStyle, FilledButtonStyle, OutlineButtonStyle, PriceStyle, SideBarStyle } from '../../shared/sharedStyles';
import { ContentStyle, DescriptionStyle } from './ProductStyle';

const ProductPage = () => {
  const title = "FIFA 2022";
  const price = 299.99;
  const description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

  return (
    <ContainerStyle>
      <ContentStyle>
        <ProductImages />

        <DescriptionStyle>
          <h2>{title}</h2>
          <p>{description}</p>
        </DescriptionStyle>
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
