import styled from "styled-components";

export default function FinishPurchase(){
    return(
        <FinishPurchaseContainerStyle>
            <ContentContainerStyle>
                <PriceStyle>
                    <span>Valor total da compra</span>
                    <span> R$ 899,97</span>
                </PriceStyle>
                <PaymentMethodsStyle>
                    <p>Formas de pagamento</p>

                    <FormGroupStyle>
                        <InputStyle type="radio" name="payment-method" value="credit-card" id="credit-card"/>
                        <label for="credit-card">Cartão de crédito</label><br/>
                    </FormGroupStyle>
                    <FormGroupStyle>
                        <InputStyle type="radio" name="payment-method" value="debit-card" id="debit-card"/>
                        <label for="debit-card">Cartão de débito</label><br/>
                    </FormGroupStyle>
                    <ConfirmPurchaseButtonStyle type="submit">
                        Efetuar compra
                    </ConfirmPurchaseButtonStyle>
                </PaymentMethodsStyle>
            </ContentContainerStyle>
        </FinishPurchaseContainerStyle>
    );
}

const FinishPurchaseContainerStyle = styled.div`
    width: 400px;
    height: 355px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentContainerStyle = styled.div`
    width: 315px;
    height: 269px;
`;

const PriceStyle = styled.div`
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(29, 29, 29, 0.1);

    font-size: 18px;
    font-weight: 700;
    color: black;

    display: flex;
    justify-content: space-between;

    span:nth-child(2){
        color: #FF3300;
    }
`;

const PaymentMethodsStyle = styled.form`
    margin-top: 20px;
    p{
        font-size: 14px;
    }
`;

const FormGroupStyle = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;

    label{
        margin-left: 5px;
        cursor: pointer;
    }
`;

const InputStyle = styled.input`
    appearance: none;
    cursor: pointer;
    border: solid 1px black;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    outline: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    ::before{
        content: '';
        position: absolute;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: #FF3300;
        opacity: 0;
    }
    :checked:before{
        opacity: 1;
    }
`;

const ConfirmPurchaseButtonStyle = styled.button`
    margin-top: 50px;
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #FF3300;

    color: white;
    font-family: 'Play', sans-serif;
    font-size: 18px;

`; 