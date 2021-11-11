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

export default function HomePage(){
    const noGames = games.length === 0;
    return(
        <>
            {noGames ? 
                <NoGamesStyle>Não há jogos cadastrados :(</NoGamesStyle>
                :  
                <>  
                    <Banner/>
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