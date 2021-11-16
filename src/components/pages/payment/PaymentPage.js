import { useState } from "react";
import styled from "styled-components";
import FinishPurchase from "./FinishPurchase";
import PaymentData from "./PaymentData";

export default function PaymentPage(){

    const [isPaymentDataEmpty, setIsPaymentDataEmpty] = useState(true);

    return(
        <PageContainerStyle>
            <ContentContainerStyle>
                <PaymentData 
                    setIsPaymentDataEmpty={setIsPaymentDataEmpty}
                />
                <FinishPurchase 
                    isPaymentDataEmpty={isPaymentDataEmpty}
                    setIsPaymentDataEmpty={setIsPaymentDataEmpty}
                />
            </ContentContainerStyle>
        </PageContainerStyle>
    );
}

const PageContainerStyle = styled.main`
    display: block;
    width: 85%;
    max-width: 1135px;
    margin: 0 auto;
    position: relative;

    @media (max-width: 750px){
        width: 100%;
    }
`;

const ContentContainerStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1080px){
        flex-direction: column;
        align-items: center;
    }
`;