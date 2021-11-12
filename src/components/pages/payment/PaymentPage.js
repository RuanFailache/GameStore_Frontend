import styled from "styled-components";
import { ContainerStyle } from "../../shared/sharedStyles";
import FinishPurchase from "./FinishPurchase";
import PaymentData from "./PaymentData";

export default function PaymentPage(){
    return(
        <ContainerStyle>
            <ContentContainerStyle>
                <PaymentData/>
                <FinishPurchase/>
            </ContentContainerStyle>
        </ContainerStyle>
    );
}

const ContentContainerStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;    
`;