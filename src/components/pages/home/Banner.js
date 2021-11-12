import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";

export default function Banner({ featuredGame }){
    return(
        <BannerContainer>
            <img src={featuredGame.coverImg} alt={featuredGame.name}/>
            <BannerTextContainerStyle>
                <BannerTitleStyle>{featuredGame.name.toUpperCase()}</BannerTitleStyle>
                <BannerDescriptionStyle>{featuredGame.description}</BannerDescriptionStyle>
                <BannerPriceStyle>R$ {featuredGame.price}</BannerPriceStyle>
            </BannerTextContainerStyle>
        </BannerContainer>
    );
}


const BannerContainer = styled.section`
    width: 1135px;
    height: 72%;
    display: flex;
    margin-left: calc(50vw - (1135px/2));
    img{
        width: 795px;
        height: 395px;

        :hover{
            filter: brightness(1.2);
            cursor: pointer;
        }
    }
`;

const BannerTextContainerStyle = styled.div`
    width: 270px;
    margin-left: 4%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
