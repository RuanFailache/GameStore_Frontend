import styled from "styled-components"

export default function Header() {


    return(
        <HeaderDiv>
            <HeaderStyle>
            </HeaderStyle>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    height: 80px;
    width: 100%;
    margin: 0 0 20px 0;
    position: relative;

`;

const HeaderStyle = styled.div`
    height: 100%;
    width: 1135px;
    postion: fixed;
    top: 0;
    margin: 0 auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1145px) {
        width: calc(100% - 60px);
    }
`;