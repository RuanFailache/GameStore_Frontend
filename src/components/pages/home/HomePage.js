import styled from "styled-components";
import { ContainerStyle } from "../../shared/sharedStyles";
import Banner from "./Banner";
import GameCard from "./GameCard";
const games = [
    {   
        id: 1,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877'
    },
    {
        id: 2,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877'
    },
    {
        id: 3,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877'
    },
    {   
        id: 4,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877'
    },
    {   
        id: 5,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877'
    },
    {
        id: 6,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877'
    },
    {   
        id: 7,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877'
    },
    {   
        id: 8,
        name: 'League of Legends',
        price: '299',
        coverImg: 'https://e.snmc.io/lk/l/x/51f9c8d7985ba1a02328b4c74110dd36/5288877'
    }
];

export default function HomePage(){
    return(
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
                        />
                    )}
                </GameCardsContainerStyle>
            </ContainerStyle>
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
