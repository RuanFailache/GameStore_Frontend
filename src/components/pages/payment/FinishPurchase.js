import { useContext, useState } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import { useNavigate } from "react-router";
import { postPurchase } from "../../../services/api";
import UserContext from "../../shared/contexts/UserContext";
import OrderContext from "../../shared/contexts/OrderContext";
import CartContext from "../../shared/contexts/CartContext";

export default function FinishPurchase({ isPaymentDataEmpty, setIsPaymentDataEmpty }){

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("");
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const userId = user.user.userId;
    const { order } = useContext(OrderContext);
    const { setProductsInCart } = useContext(CartContext);

    function selectPaymentMethod(event){
        setPaymentMethod(event.target.value);
    }

    function openConfirmationModal(event){
        event.preventDefault();
        setModalIsOpen(true);
    }

    function makePurchase(){

        postPurchase(body)
            .then(() => {
                setModalIsOpen(false);
                alert("Compra efetuada com sucesso!");
                setIsPaymentDataEmpty(true);
                setProductsInCart([]);
                navigate("/");
            })
            .catch((err) => {
                setModalIsOpen(false);
                const statusCode = err.response.status;
                if(statusCode === 400){
                    alert('Houve um erro ao finalizar a compra.');
                }
                else{
                    alert('Erro de servidor.');
                }
            });   
    }

    const isCartEmpty = order.length === 0;

    let totalValue = 0;
    if(!isCartEmpty){
        order.forEach((prod) => {
            totalValue += (prod.price*prod.amount);
        });
    }

    const body = {
        userId: userId,
        paymentMethod: paymentMethod,
        products: order.map((prod) => {
            return [{productId: prod.id, amount: prod.amount}]
        }),  
    }


    return(
        isCartEmpty ? 
        <p>N??o h?? produtos no carrinho</p>
        :
        <>
            <FinishPurchaseContainerStyle>
                <ContentContainerStyle>
                    <PriceStyle>
                        <span>Valor total da compra</span>
                        <span> R$ {(totalValue/100).toFixed(2)}</span>
                    </PriceStyle>
                    <PaymentMethodsStyle onSubmit={openConfirmationModal}>
                        <p>Formas de pagamento</p>
                        <FormGroupStyle>
                            <InputStyle type="radio" name="payment-method" onChange={selectPaymentMethod} value="credit-card" id="credit-card" required/>
                            <label for="credit-card">Cart??o de cr??dito</label><br/>
                        </FormGroupStyle>
                        <FormGroupStyle>
                            <InputStyle type="radio" name="payment-method" onChange={selectPaymentMethod} value="debit-card" id="debit-card"/>
                            <label for="debit-card">Cart??o de d??bito</label><br/>
                        </FormGroupStyle>
                        <ConfirmPurchaseButtonStyle type="submit" isPaymentDataEmpty={isPaymentDataEmpty} disabled={isPaymentDataEmpty}>
                            Efetuar compra
                        </ConfirmPurchaseButtonStyle>
                    </PaymentMethodsStyle>
                </ContentContainerStyle>
            </FinishPurchaseContainerStyle>
            <ModalQueryStyle isOpen={modalIsOpen} style={modalStyle} ariaHideApp={false}>
                <>
                    <p>Confirmar pagamento?</p>
                    <ButtonsContainerStyle>
                        <button onClick={makePurchase}>
                            Sim
                        </button>
                        <button onClick={() => setModalIsOpen(false)}>
                            N??o
                        </button>
                    </ButtonsContainerStyle>
                </>  
            </ModalQueryStyle>
        </>
    );
}

const FinishPurchaseContainerStyle = styled.div`
    width: 35%;
    height: 355px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1080px){
        width: 90%;
        margin-bottom: 20px;
    }

    @media (max-width: 750px){
        width: 100%;
        border-radius: 0;
    }
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
    background-color: ${(props) => props.isPaymentDataEmpty? '#CECECE' : '#FF3300'};

    color: white;
    font-family: 'Play', sans-serif;
    font-size: 18px;

    :hover{
        cursor: ${(props) => props.isPaymentDataEmpty ? 'initial': 'pointer'};
        filter: ${(props) => props.isPaymentDataEmpty ? 'brightness(1)': 'brightness(1.5)'};
    }

`; 

const ModalQueryStyle = styled(ReactModal)`
    height: 250px;
    width: 40%;
    top: calc(50vh - 131px);
    left: calc(50vw - 298px);
    padding: 30px;
    position: fixed;
    background-color: #FAFAFA;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 50px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: black;
    outline: none;
    p{
        font-size: 30px;
        font-family: 'Play', sans-serif;
        text-align: start;
        display: flex;
        justify-content: center;
        width: 100%;
        padding-top: 30px;
    }
    
    @media(max-width: 600px) {
        height: 200px;
        width: 100%;
        top: calc(50vh - 131px);
        left:0;
        border-radius: 0;
        font-size: 20px;
        padding: 15px 10px;
        p{font-size: 25px;}
    }
`

const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
     },
     content: {
        border: 'none',   
     }
 }

 const ButtonsContainerStyle = styled.div`
    width: 58%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
    
    button{
        width: 122px;
        height: 41px;
        border: none;
        border-radius: 5px;
        margin-top: 5px;
        font-family: 'Play', sans-serif;
        font-weight: 700;
        color: #FFF;
        :hover{
            filter: brightness(1.5);
            cursor: pointer;
        }
    }

    button:first-child{
        background-color: #FF3300;
    }
    button:last-child{
        color: #FF3300;
        background-color: white;
        border: 2px solid #FF3300;
    }
`;