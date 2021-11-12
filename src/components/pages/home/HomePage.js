import { useState } from "react";
import styled from "styled-components";
import { ContainerStyle } from "../../shared/sharedStyles";
import Banner from "./Banner";
import GameCard from "./GameCard";
const games = [
    {   
        id: 1,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877',
        inventory: 3
    },
    {
        id: 2,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877',
        inventory: 0
    },
    {
        id: 3,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877',
        inventory: 3
    },
    {   
        id: 4,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877',
        inventory: 3
    },
    {   
        id: 5,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877',
        inventory: 3
    },
    {
        id: 6,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877',
        inventory: 3
    },
    {   
        id: 7,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877',
        inventory: 3
    },
    {   
        id: 8,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877',
        inventory: 3
    }
];

const featuredGames = [
    {   
        id: 1,
        name: 'League of Legends - Enemy',
        price: '299',
        coverImg: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd615715a4615fbb7/61799ab32378d322b0633c98/Arc_EnemyMV_Textless.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inventory: 3
    },
    {   
        id: 2,
        name: 'League of Legends - Enemy',
        price: '299',
        coverImg: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd615715a4615fbb7/61799ab32378d322b0633c98/Arc_EnemyMV_Textless.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        inventory: 3
    },
];


export default function HomePage(){
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
                                    coverImg={game.coverImg}
                                    inventory={game.inventory}
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