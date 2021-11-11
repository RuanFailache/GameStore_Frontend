import styled from "styled-components";

export default function Banner(){
    return(
        <BannerSectionStyle>
                <BannerContainer>
                    <img src='https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd615715a4615fbb7/61799ab32378d322b0633c98/Arc_EnemyMV_Textless.jpg' alt='game'/>
                    <BannerTextContainerStyle>
                        <BannerTitleStyle>
                            TÍTULO DO JOGO
                        </BannerTitleStyle>
                        <BannerDescriptionStyle>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </BannerDescriptionStyle>
                        <BannerPriceStyle>
                            R$ 299,00
                        </BannerPriceStyle>
                    </BannerTextContainerStyle>
                </BannerContainer>
            </BannerSectionStyle>
    );
}

const BannerSectionStyle = styled.section`
    width: 100%;
    height: 41.5vw;
    max-height: 560px;
    background-color: #212121;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const BannerContainer = styled.section`
    width: 85%;
    max-width: 1135px;
    height: 72%;
    display: flex;

    img{
        width: 70%;
        height: 100%;
    }
`;

const BannerTextContainerStyle = styled.div`
    width: 23%;
    margin-left: 4%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const BannerTitleStyle = styled.h3`
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 15PX;
`;

const BannerDescriptionStyle = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const BannerPriceStyle = styled.p`
    font-size: 25px;
    font-weight: 700;
    color: #FF3300;
    margin-top: 15px;
`;
