import { useState } from "react";
import styled from "styled-components";

export default function PaymentData({setIsPaymentDataEmpty}){
    const [cardNumber, setCardNumber] = useState("");
    const [cardOwner, setCardOwner] = useState("");
    const [cardExpiration, setCardExpiration] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    
    function confirmPaymentData(event){
        event.preventDefault();
        setIsPaymentDataEmpty(false);

    }

    return(
        <PaymentDataContainerStyle>
            <PaymentDataStyle onSubmit={confirmPaymentData}>
                <h2>Dados de pagamento</h2>
                <PaymentDataInputStyle 
                    placeholder='Número do cartão'
                    type='text'
                    value={cardNumber}
                    onChange={(e)=> setCardNumber(e.target.value)}
                    required
                />
                <PaymentDataInputStyle 
                    placeholder='Titular do cartão'
                    type='text'
                    value={cardOwner}
                    onChange={(e)=> setCardOwner(e.target.value)}
                    required
                />
                <SmallerInputsContainerStyle>
                    <PaymentDataInputStyle 
                        placeholder='Vencimento'
                        type='text'
                        value={cardExpiration}
                        onChange={(e)=> setCardExpiration(e.target.value)}
                        required
                    />
                    <PaymentDataInputStyle 
                        placeholder='CVV'
                        type='text'
                        value={cardCVV}
                        onChange={(e)=> setCardCVV(e.target.value)}
                        required
                    />
                </SmallerInputsContainerStyle>
                <ConfirmDataButtonStyle type='submit'>
                    Confirmar dados
                </ConfirmDataButtonStyle>
            </PaymentDataStyle>
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
`;

const PaymentDataStyle = styled.form`
    width: 360px;
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