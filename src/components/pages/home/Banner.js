import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Banner({ featuredGame }){
    return(
        <BannerContainer to={`products/${featuredGame.id}`}>
            <img src={featuredGame.banner} alt={featuredGame.name}/>
            <BannerTextContainerStyle>
                <BannerTitleStyle>{featuredGame.name.toUpperCase()}</BannerTitleStyle>
                <BannerDescriptionStyle>{featuredGame.description}</BannerDescriptionStyle>
                <BannerPriceStyle>R$ {featuredGame.price/100}</BannerPriceStyle>
            </BannerTextContainerStyle>
        </BannerContainer>
    );
}

const BannerContainer = styled(Link)`
    width: 100%;
    max-width: 1135px;
    height: 72%;
    display: flex;
    align-items: center;
    margin-left: calc(50vw - (1135px/2));
    text-decoration: none;
    padding: 0 40px;

    img{
        width: 795px;
        height: 395px;

        :hover{
            filter: brightness(1.2);
            cursor: pointer;
        }
    }

    @media (max-width: 950px){
        img{
            width: 100%;
        }
        padding: 0;
        margin: 0;
    }
    @media (max-width: 600px){
        img{width: 90vw;} 
    }
`;

const BannerTextContainerStyle = styled.div`
    width: 250px;
    margin-left: 4%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 950px){
        display: none;
    }
`;

const BannerTitleStyle = styled.h3`
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 15px;
    :hover{
            filter: brightness(0.8);
            cursor: pointer;
        }
`;

const BannerDescriptionStyle = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    :hover{
            filter: brightness(0.8);
            cursor: pointer;
        }
`;

const BannerPriceStyle = styled.p`
    font-size: 25px;
    font-weight: 700;
    color: #FF3300;
    margin-top: 15px;

    :hover{
            filter: brightness(1.2);
            cursor: pointer;
        }    
`;

