import styled from "styled-components"

const ContainerStyle = styled.main`
    display: block;
    width: 85%;
    margin: 0 auto;
    position: relative;

    @media (max-width: 600px){
        width: 100%;
    }
`;

export {
    ContainerStyle
}