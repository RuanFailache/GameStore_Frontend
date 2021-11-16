import styled from "styled-components"
import { getProduct } from "../../../services/api";
import CartContext from '../../shared/contexts/CartContext';
import Header from "../../shared/Header";
import { useContext, useState, useEffect } from "react";
import CartItems from './components/CartItems';
import Sidebar from "./components/Sidebar";

export default function CartPage() {
    const { productsInCart } = useContext(CartContext);
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        productsInCart.forEach(gameId => {
            getProduct(gameId)
                .then((res) => {
                    let game = res.data;
                    game.amount = 1;
                    let list = productsList;
                    list.push(game);
                    setProductsList([...list]);
                })
                .catch((err) => {
                    alert('Erro ao acessar o servidor.');
                    setProductsList([]);
                })
            })
    }, []); //eslint-disable-line react-hooks/exhaustive-deps

    function changeAmount(index, operation) {
        function removeFromCart(index) {
            let confirmation = window.confirm("O item " + productsList[index].name + " será removido do carrinho.");
            if(confirmation) {setProductsList(productsList.filter((game, i) => i !== index))}
        }

        if(productsList[index].amount === 1 && operation === "remove") {
            removeFromCart(index);
        } else {
            let temporaryList = [...productsList];
            let temporaryGame = {...temporaryList[index]};
            if(operation === 'add') {temporaryGame.amount += 1}
            else {temporaryGame.amount -= 1}
            temporaryList[index] = temporaryGame;
            setProductsList(temporaryList);
        }
    }


    return(
        <Body>
            <Header/>
            <Container>
                <CartItems productsList={productsList} changeAmount={changeAmount}/>
                <Sidebar productsList={productsList} setProductsList={setProductsList}/>
            </Container>
        </Body>
    )
}

const Body = styled.div`
    background: #E5E5E5;
    height: 100vh;
    overflow-y: scroll;
`;

const Container = styled.main`
    display: flex;
    justify-content: space-between;
    min-height: calc(100vh - 240px);
    width: 1135px;
    margin: 0 auto 40px auto;
    position: relative;
    background: #E5E5E5;

    @media (max-width: 1145px) {
        width: calc(100vw - 60px);
    }

    @media (max-width: 870px) {
        flex-direction: column;
        margin: 0 auto 0 auto;
    }
`;