import styled from "styled-components"

import Header from "../../shared/Header";


export default function CartPage() {

    return(
        <Body>
            <Header/>
        </Body>
    )
}

const Body = styled.div`
    background: #E5E5E5;
    height: 100vh;
    overflow-y: scroll;
`;