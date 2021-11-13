import styled from "styled-components";
import AmountControls from "./AmountControls";

export default function CartItem({game, index, changeAmount}) {
    return(
        <CartItemStyle key={index}>
            <img alt="Game cover" src={game.cover}></img>
            <h1>{game.name}</h1>
            <AmountControls game={game} index={index} changeAmount={changeAmount}/>
            <ItemPrice>
                <h1>Preço do produto</h1>
                <h1>R${((game.price/100)*game.amount).toFixed(2)}</h1>
            </ItemPrice>
        </CartItemStyle>
    )
}

const CartItemStyle = styled.div`
    width: 100%;
    margin: 30px 0 0 0;
    padding: 0 0 30px 0;
    border-bottom: 1px solid rgba(29, 29, 29, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 76.8px;
        height: 96px;
        border-radius: 5px;
    }
    h1 {
        font-family: Play;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        width: 200px;
        text-align: center;
    }
`;

const ItemPrice = styled.div`
    display: flex;
    flex-direction: column;
    h1 {
        font-family: Play;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        width: 100%;
        text-align: end;
    }
    h1:last-child {
        font-weight: bold;
        color: #FF3300;
        margin: 7px 0 0 0;
    }
`;