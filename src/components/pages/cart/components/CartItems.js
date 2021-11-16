import styled from "styled-components";
import CartItem from "./CartItem";

export default function CartItems({productsList, changeAmount}) {
    return(
        <CartItemsStyle>
            {productsList.length > 0
            ? productsList.map((game, index) => (
                <CartItem game={game} index={index} changeAmount={changeAmount} />
            ))
            : <EmptyCart>Carrinho vazio!</EmptyCart>}
        </CartItemsStyle>
    )
}

const CartItemsStyle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    width: calc(100% - 420px);
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    padding: 0 30px;
    div:last-child {
        border: none;
    }
    @media (max-width: 1145px) {
        width: calc(((100vw - 60px)/100) * 65);
    }

    @media (max-width: 870px) {
        width: 100%;
        margin-bottom: 40px;
    }
`;

const EmptyCart = styled.div`
    height: 100%;
    margin: 50px;
    display: flex;
    justify-content: center;
`;