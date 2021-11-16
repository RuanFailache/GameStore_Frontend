import { useState } from "react";
import styled from "styled-components";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function PaymentData({setIsPaymentDataEmpty}){
    const [cardNumber, setCardNumber] = useState("");
    const [cardOwner, setCardOwner] = useState("");
    const [cardExpiration, setCardExpiration] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const [focus, setFocus] = useState("");
    
    function confirmPaymentData(event){
        event.preventDefault();
        let isValidExpirationDate = (Number(cardExpiration[0] + cardExpiration[1]) <= 12) &&  (Number(cardExpiration[3] + cardExpiration[4]) > 21);
        
        isValidExpirationDate ? setIsPaymentDataEmpty(false) : alert("Insira uma data válida.");   
    }

    return(
        <PaymentDataContainerStyle>
            <PaymentDataStyle onSubmit={confirmPaymentData}>
                <h2>Dados de pagamento</h2>
                <PaymentDataInputStyle 
                    placeholder='Número do cartão'
                    type='string'
                    name='cardNumber'
                    value={cardNumber}
                    pattern='[0-9]{16}'
                    onChange={(e)=> setCardNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    required
                />
                <PaymentDataInputStyle 
                    placeholder='Titular do cartão'
                    type='text'
                    name='cardOwner'
                    value={cardOwner}
                    onChange={(e)=> setCardOwner(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    required
                />
                <SmallerInputsContainerStyle>
                    <PaymentDataInputStyle 
                        placeholder='Vencimento'
                        type='text'
                        name='cardExpiration'
                        value={cardExpiration}
                        pattern='[0-9]{2}/[0-9]{2}'
                        onChange={(e)=> setCardExpiration(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                        required
                    />
                    <PaymentDataInputStyle 
                        placeholder='CVV'
                        type='tel'
                        name='cardCVV'
                        value={cardCVV}
                        pattern='[0-9]{3}'
                        onChange={(e)=> setCardCVV(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                        required
                    />
                </SmallerInputsContainerStyle>
                <ConfirmDataButtonStyle type='submit'>
                    Confirmar dados
                </ConfirmDataButtonStyle>
            </PaymentDataStyle>
            <CardContainerStyle>
                <Cards
                    number={cardNumber}
                    name={cardOwner}
                    expiry={cardExpiration}
                    cvc={cardCVV}
                    focused={focus}
                />
            </CardContainerStyle>
        </PaymentDataContainerStyle>
    );
}

const PaymentDataContainerStyle = styled.div`
    width: 700px;
    height: 355px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
    display: flex;
`;

const PaymentDataStyle = styled.form`
    width: 330px;
    height: 100%;

    h2{
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 10px;
    }
`;

const PaymentDataInputStyle = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #CECECE;
    border-radius: 20px;
    margin-top: 15px;
    padding-left: 15px;
    outline-color: #FF3300;

    ::placeholder{
        color: #CECECE;
        font-size: 15px;
    }
`;

const SmallerInputsContainerStyle = styled.div`


    input:first-child{
        width: 45%;
        margin-right: 15px;
    }

    input:last-child{
        width: 20%;
        padding-left: 0;
        text-align: center;
        ::placeholder{
            text-align: center;
        }
    }
`;

const ConfirmDataButtonStyle = styled.button`
    margin-top: 25px;
    width: 45%;
    height: 40px;
    background-color: #FF3300;
    border: none;
    border-radius: 5px;

    font-family: 'Play', sans-serif;
    font-size: 17px;
    color: white;

    :hover{
        cursor: pointer;
        filter: brightness(1.4);
    }
`;

const CardContainerStyle = styled.div`
    margin-left: 20px;
    height: 100%;
    padding-top: 48px;
`;