import { Link } from "react-router-dom";
import styled from "styled-components";

export default function GameCard({ id, name, price, coverImg }){
    return(
        <CardStyle to={`/products/${id}`}>
            <img src={coverImg} alt="game-cover"/>
            <CardTextContainerStyle>
                <GameTitleStyle>
                    {name}
                </GameTitleStyle>
                <GamePriceStyle>
                    R$ {price}
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

    img{
        width: 200px;
        height: 240px;
        border-radius: 5px;
    }
    
    :hover{
        filter: brightness(1.2);
        cursor: pointer;
    }
 
`;

const CardTextContainerStyle = styled.div`
    width: 200px;
    margin-top: 8px;
`;

const GameTitleStyle = styled.p`
    font-weight: 700;
    color: black;
`;

const GamePriceStyle = styled.p`
    color: #FF3300;
    font-weight: 700;
    margin-top: 5px;
`;