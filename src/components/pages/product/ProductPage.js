import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

import ProductImages from './ProductImages';

import { ContainerStyle, FilledButtonStyle, OutlineButtonStyle, PriceStyle, SideBarStyle } from '../../shared/sharedStyles';
import { ContentStyle, DescriptionStyle, NotFound } from './ProductStyle';

import CartContext from '../../shared/contexts/CartContext';

import { getProduct } from '../../../services/api';

import Header from '../../shared/Header';

const ProductPage = () => {
  const { productsInCart, setProductsInCart } = useContext(CartContext)

  const [product, setProduct] = useState(null)
  const [onCart, setOnCart] = useState(false)

  const { id } = useParams()

  const navigateTo = useNavigate()

  useEffect(() => {
    let isActive = true

    if (isActive) {
      (async function () {
        try {
          const result = await getProduct(id);
          setProduct({ ...result.data })
        } catch {
          setProduct(null)
        }
      })()

      if (productsInCart.includes(id)) {
        setOnCart(true)
      }
    }

    return () => {
      isActive = false;
    }
  }, [id, productsInCart])

  const goToPaymentPage = () => {
    if (!productsInCart.includes(id)) {
      addToCart();
    }
    navigateTo('/cart')
    console.log()
  }

  const addToCart = () => {
    console.log(productsInCart)
    setProductsInCart([...productsInCart, id]);
    setOnCart(true);
  }

  return (
    <ContainerStyle>
      <Header />
      {product === null ? <NotFound>Jogo indisponivel ou não encontrado!</NotFound> : (
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

            <FilledButtonStyle onClick={goToPaymentPage}>
              Compre agora
            </FilledButtonStyle>

            <OutlineButtonStyle onClick={addToCart} disabled={onCart}>
              {onCart ? 'Adicionado' : 'Adicione ao carrinho'}
            </OutlineButtonStyle>
          </SideBarStyle>
        </>)}
    </ContainerStyle>
  )
}

export default ProductPage
