import styled from "styled-components"
import { useContext } from "react";
import { useNavigate } from "react-router";
import CartContext from "./contexts/CartContext";
import { BiShoppingBag } from 'react-icons/bi';
import UserContext from "./contexts/UserContext";

export default function Header() {
    const { productsInCart } = useContext(CartContext);
    const { user, setUser } = useContext(UserContext);
    let navigate = useNavigate();

    function logOut() {
        localStorage.clear();
        setUser(null);
    }

    return(
        <HeaderDiv>
            <HeaderStyle>
                <Logo onClick={() => {navigate('/')}}><h1>Shop</h1><h1>Gamer</h1></Logo>
                <UserArea>
                    <SignOptions>
                        {user === null
                        ? <h1>Olá, faça <span onClick={() => {navigate('/sign-in')}}>login</span> ou <span onClick={() => {navigate('/sign-up')}}>cadastre</span> uma conta</h1>
                        : <h1>Olá, {user.user.name}! Deseja sair? Clique <span onClick={() => logOut()}>aqui.</span></h1>}
                    </SignOptions>
                    <CartSection onClick={() => {navigate('/cart')}}>
                        <CartIcon/>
                        <h1>( {productsInCart.length} )</h1>
                    </CartSection>
                </UserArea>
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

const Logo = styled.div`
    height: 48px;
    width: 90px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    h1 {
        font-family: 'Play', sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: #000000;
    }
    h1:last-child {
        text-align: end;
    }
`;

const UserArea = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 350px){
        width: 150px;
    }
`;

const SignOptions = styled.div`
    width: 130px;
    text-align: center;
    h1 {
        font-family: Play;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: #000000;
    }
    span {
        color: #FF3300;
        cursor: pointer;
    }
    @media (max-width: 350px){
        width: 90px;
    }
`;

const CartSection = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    h1 {
        font-family: Play;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: #000000;
        margin: 0 0 0 5px;
    }
`;

const CartIcon = styled(BiShoppingBag)`
    font-size: 24px;
    color: #000000;
`;