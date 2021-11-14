import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsCartPlusFill } from "react-icons/bs"
import { useContext, useState } from "react";
import CartContext from "../../contexts/CartContext";

export default function GameCard({ id, name, price, cover, stock }){
    
    const {productsInCart, setProductsInCart} = useContext(CartContext);    
    
    const outOfStock = stock === 0;
    const [isInTheCart, setIsInTheCart] = useState(productsInCart.includes(id));

    function addToCart(e){
        e.preventDefault();

        if(!outOfStock){
            isInTheCart ? setIsInTheCart(false) : setIsInTheCart(true);
            isInTheCart? setProductsInCart(productsInCart.filter((prodId) => prodId !== id)) : setProductsInCart([...productsInCart, id]);
        }

    }

    return(
        <CardStyle to={`/products/${id}`}>
            {
                outOfStock 
                ? 
                <OutOfStockStyle>
                Produto fora de estoque :(
                </OutOfStockStyle>
                :
                <div/>
            }
            <img src={cover} alt="game-cover"/>
            <CardTextContainerStyle>
                <GameTitleStyle>
                    {name}
                </GameTitleStyle>
                <GamePriceStyle>
                    {outOfStock ? '---' 
                        : 
                        <span>
                            R$ {price/100} 
                            <AddToCartIconStyle isInTheCart={isInTheCart} onClick={addToCart}/>
                        </span>
                    }
                </GamePriceStyle>
            </CardTextContainerStyle>
        </CardStyle>
    );
}

const CardStyle = styled(Link)`
    text-decoration: none;
    
    width: 230px;
    height: 310px;
    background-color: white;
    border-radius: 5px;
    margin-top: 20px;
    padding: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    img{
        width: 200px;
        height: 240px;
        border-radius: 5px;
    }
    
    :hover{
        filter: brightness(1.2);
        cursor: pointer;
    }

    @media (max-width: 600px){
        margin-top: 5px;
    }
 
`;

const OutOfStockStyle = styled.div`
    width: 200px;
    height: 240px;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(110,110,110,1) 100%);
    border-radius: 5px;
    opacity: 0.7;
    position: absolute;
    top: 13px;
    z-index: 1;

    color: black;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardTextContainerStyle = styled.div`
    width: 200px;
    margin-top: 8px;
`;

const GameTitleStyle = styled.p`
    font-weight: 700;
    color: black;
    margin-bottom: 5px;
`;

const GamePriceStyle = styled.div`
    color: #FF3300;
    font-weight: 700;
`;

const AddToCartIconStyle = styled(BsCartPlusFill)`
    margin-left: 120px;
    color: ${(props) => props.isInTheCart ? '#FF3300' : 'gray'};
    :hover{
        filter: brightness(1.2);
    }
`;