import { useState } from "react";
import styled from "styled-components";
import { ContainerStyle } from "../../shared/sharedStyles";
import FinishPurchase from "./FinishPurchase";
import PaymentData from "./PaymentData";

export default function PaymentPage(){

    const [isPaymentDataEmpty, setIsPaymentDataEmpty] = useState(true);

    return(
        <ContainerStyle>
            <ContentContainerStyle>
                <PaymentData 
                    setIsPaymentDataEmpty={setIsPaymentDataEmpty}
                />
                <FinishPurchase 
                    isPaymentDataEmpty={isPaymentDataEmpty}
                />
            </ContentContainerStyle>
        </ContainerStyle>
    );
}

const ContentContainerStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;    
`;