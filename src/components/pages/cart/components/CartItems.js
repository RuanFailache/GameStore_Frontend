import styled from "styled-components";
import CartItem from "./CartItem";

export default function CartItems({productsList, changeAmount}) {
    return(
        <CartItemsStyle>
            {productsList.length > 0
            ? productsList.map((game, index) => (
                <CartItem game={game} index={index} changeAmount={changeAmount} key={index}/>
            ))
            : <EmptyCart>Carrinho vazio!</EmptyCart>}
        </CartItemsStyle>
    )
}

const CartItemsStyle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    width: calc(100% - 390px);
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    padding: 0 30px;
    div:last-child {
        border: none;
    }
`;

const EmptyCart = styled.div`
    height: 100%;
    margin: 50px;
    display: flex;
    justify-content: center;
`;