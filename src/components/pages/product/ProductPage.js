import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios'

import ProductImages from './ProductImages';

import { ContainerStyle, FilledButtonStyle, OutlineButtonStyle, PriceStyle, SideBarStyle } from '../../shared/sharedStyles';
import { ContentStyle, DescriptionStyle } from './ProductStyle';

import CartContext from '../../contexts/CartContext';

const ProductPage = () => {
  const { productInCart, setProductsInCart } = useContext(CartContext)
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const navigateTo = useNavigate()

  useEffect(() => {
    (async function () {
      try {
        const result = await axios.get(`https://gamestore-back.herokuapp.com`);
        console.log(result.data)
        setProduct({ ...result.data });
      } catch {
        setProduct(null)
      }
    })()
  }, [id])

  const goToPaymentPage = () => {
    if (!productInCart.includes(id)) {
      setProductsInCart([...productInCart, id]);
    }
    navigateTo('/cart')
    console.log()
  }

  return (
    <ContainerStyle>
      {product === null ? null : (
        <>
          <ContentStyle>
            <ProductImages images={[product.cover, product.banner, product["first-image"], product["second-image"]]} />

            <DescriptionStyle>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </DescriptionStyle>
          </ContentStyle>

          <SideBarStyle>
            <PriceStyle>R$ {String(product.price / 100).replace('.', ',')}</PriceStyle>
            <p>Parcele em até 12x no <strong>cartão de credito</strong> sem juros</p>
            <FilledButtonStyle onClick={goToPaymentPage}>Compre agora</FilledButtonStyle>
            <OutlineButtonStyle onClick={() => productInCart.includes(id) ? setProductsInCart(id) : null}>Adicione ao carrinho</OutlineButtonStyle>
          </SideBarStyle>
        </>)}
    </ContainerStyle>
  )
}

export default ProductPage
