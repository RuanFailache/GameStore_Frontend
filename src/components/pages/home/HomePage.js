import { useEffect, useState } from "react";
import styled from "styled-components";
import { getProducts } from "../../../services/api";
import { ContainerStyle } from "../../shared/sharedStyles";
import Banner from "./Banner";
import GameCard from "./GameCard";

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

    const noGames = games.length === 0;
    
    return(
        <>
            {noGames ? 
                <NoGamesStyle>Não há jogos cadastrados :(</NoGamesStyle>
                :  
                <>  <BannerSectionStyle>
                        {featuredGames.map((game) => <Banner key={game.id} featuredGame={game}/>)}
                    </BannerSectionStyle>
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

const BannerSectionStyle = styled.section`
    width: 100%;
    height: 560px;
    background-color: #212121;

    display: flex;
    flex: wrap;
    align-items: center;

    overflow-x: scroll;
`;


const CatalogTitleStyle = styled.div`
    margin-top: 30px;
    font-size: 40px;
    font-weight: 700;
    color: #FF3300;
`;

const GameCardsContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
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