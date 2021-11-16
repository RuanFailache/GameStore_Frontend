import styled from "styled-components";

export default function AmountControls({game, index, changeAmount}) {
    return (
        <AmountControlsStyle>
            <h2>Quant.</h2>
            <Buttons>
                <button onClick={() => changeAmount(index, 'remove')}>-</button>
                <h2>{game.amount}</h2>
                <button onClick={() => changeAmount(index, 'add')}>+</button>
            </Buttons>
        </AmountControlsStyle>
    )
}

const AmountControlsStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
        font-family: Play;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
        text-align: center;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0 0 0;
    button {
        border: 1px solid #FF3300;
        background: #FFFFFF;
        width: 32px;
        height: 32px;
        border-radius: 5px;
        color: black;
        margin: 0 15px 0 0;
        cursor: pointer;
    }
    button:last-child {
        border: none;
        background: #FF3300;
        color: white;
        margin: 0 0 0 15px;
    }
`;