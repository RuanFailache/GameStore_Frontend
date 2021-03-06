import styled from "styled-components";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../../../shared/contexts/OrderContext";
import UserContext from "../../../shared/contexts/UserContext";

export default function Sidebar({productsList}) {
    let navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
    const { user } = useContext(UserContext);
    const { setOrder } = useContext(OrderContext);

    useEffect(() => {
        let temporaryPrice = 0;
        productsList.forEach(product => {temporaryPrice += product.amount * (product.price/100)})
        setTotalPrice(temporaryPrice);
    }, [productsList])

    function goToPayment() {
        if(user !== null) {
            setOrder(productsList);
            navigate('/payment');
            console.log(productsList);
        } else {
            alert("Entre em sua conta para prosseguir com a compra!")
        }
    }

    return(
        <SidebarStyle>
            <TotalPriceInfo>
                <div>
                    <h1>Valor total da compra</h1>
                    <h1>R${totalPrice.toFixed(2)}</h1>
                </div>
                <GrayLine/>
                <div>
                    <h1>(em até 12x no cartão de crédito com frete grátis)</h1>
                </div>
            </TotalPriceInfo>
            <Buttons>
                <button onClick={() => {productsList.length > 0 ? goToPayment() : alert('Adicione algum item ao carrinho antes de prosseguir!')}}>
                    <h1>Ir para o pagamento</h1>
                </button>
                <button onClick={() => navigate('/')}>
                    <h1>Continuar comprando</h1>
                </button>
            </Buttons>
        </SidebarStyle>
    )
}

const SidebarStyle = styled.div`
    height: 300px;
    width: 360px;
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px;

    @media (max-width: 1145px) {
        width: calc(((100vw - 60px)/100) * 30);
    }

    @media (max-width: 870px) {
        width: 100%;
    }
`;

const TotalPriceInfo = styled.div`
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div:first-child {
        display: flex;
        justify-content: space-between;
        h1 {
            font-family: Play;
            font-weight: bold;
            font-size: 18px;
            line-height: 20px;
            color: #000000;
        }
        h1:last-child {
            color: #FF3300;
        }
    }
    div:last-child {
        h1 {
            font-family: Play;
            font-weight: normal;
            font-size: 13px;
            line-height: 15px;
            color: #000000;
            text-align: center;
        }
    }

    @media (max-width: 870px) {
        div:first-child {
            align-items: center;
            text-align: center;
        }
    }
`;

const GrayLine = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgba(29, 29, 29, 0.1);
    margin: 5px 0 5px 0;
`;

const Buttons = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button {
        height: 70px;
        cursor: pointer;
        background: #FF3300;
        border-radius: 5px;
        border: none;
        h1 {
            font-family: Play;
            font-weight: bold;
            font-size: 20px;
            line-height: 22px;
            color: #FFFFFF;
            text-align: center;
            margin: auto;
        }
    }
    button:last-child {
        background: #FFFFFF;
        border: 1px solid #FF3300;
        h1 {
            color: #000000;
        }
    }
`;