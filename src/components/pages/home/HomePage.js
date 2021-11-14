import { useEffect, useState } from "react";
import styled from "styled-components";
import { getProducts } from "../../../services/api";
import { ContainerStyle } from "../../shared/sharedStyles";
import Banner from "./Banner";
import GameCard from "./GameCard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function HomePage(){

    const [games, setGames] = useState([]);
    const [featuredGames, setFeaturedGames] = useState([]);

    function loadProducts(){
        getProducts()
            .then((res) => {
                setGames(res.data);
                setFeaturedGames([res.data[0], res.data[1], res.data[2]]);
            })
            .catch((err) => {
                alert('Erro ao acessar o servidor.');
                setGames([]);
                setFeaturedGames([]);
            });
    }

    useEffect(() => {
        loadProducts();
    }, []);

    function handleLeftClick(event){
        event.preventDefault();
    }

    function handleRightClick(event){
        event.preventDefault();
    }

    const noGames = games.length === 0;
    
    return(
        <>
            {noGames ? 
                <NoGamesStyle>Não há jogos cadastrados :(</NoGamesStyle>
                :  
                <>  
                    <BannerCarouselSectionStyle width={45000} autoPlay={true} infiniteLoop={true} interval={5000}>
                        {featuredGames.map((game) => <Banner key={game.id} featuredGame={game}/>)}
                    </BannerCarouselSectionStyle>
                    <ContainerStyle>
                        <CatalogTitleStyle>
                            Jogos
                        </CatalogTitleStyle>
                        <GameCardsContainerStyle>
                            {games.map((game) => 
                                <GameCard 
                                    id={game.id} 
                                    key={`product${game.id}`} 
                                    name={game.name} 
                                    price={game.price} 
                                    cover={game.cover}
                                    stock={game.stock}
                                />
                            )}
                        </GameCardsContainerStyle>
                    </ContainerStyle>
                </>
            }
        </>
    );
}

const BannerCarouselSectionStyle = styled(Carousel)`
    width: 100%;
    height: 560px;
    background-color: #212121;

    display: flex;
    flex: wrap;
    align-items: center;
    justify-content: center;

    @media (max-width: 950px){
        padding-left: 40px;
        height: 30%;
    }
    @media (max-width: 600px){
        height: 20%;
        padding: 0;
    }
`;

const CatalogTitleStyle = styled.div`
    margin-top: 30px;
    font-size: 40px;
    font-weight: 700;
    color: #FF3300;
    @media (max-width: 600px){
        text-align: center;
        margin-bottom: 20px;
    }
`;

const GameCardsContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 600px){
        justify-content: center;
    }
    
`;

const NoGamesStyle = styled.div`
    width: 300px;
    height: 200px;


    color: gray;

    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin: calc(50vh - 100px) auto;
`;




const IconLeftStyle = styled(AiOutlineLeft)`
    z-index: 5;
    position: absolute;
    font-size: 30px;
    color: white;
    left: 30px;

    :hover{
        filter: brightness(0.7);
        cursor: pointer;
    }
`;

const IconRightStyle = styled(AiOutlineRight)`
    z-index: 5;
    font-size: 30px;
    color: white;
    position: absolute;
    left: calc(100% - 150px);

    :hover{
        filter: brightness(0.7);
        cursor: pointer;
    }
`;