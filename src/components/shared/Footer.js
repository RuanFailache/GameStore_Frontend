import styled from "styled-components";
import { AiFillGithub } from 'react-icons/ai'

export default function Footer(){
    return(
        <FooterStyle>
            <DevelopedByStyle>
                DEVELOPED BY:
            </DevelopedByStyle>
            <p>
                <span>
                    <p>
                        Adriano Gotardo
                    </p>
                    <p>
                        <GithubIconStyle/> <NameStyle href="https://github.com/adrianogotardo">adrianogotardo</NameStyle>
                    </p>
                </span>
                <span>
                    <p>
                        Erick Silva
                    </p>
                    <p>
                        <GithubIconStyle/> <NameStyle href="https://github.com/oErco">oErco</NameStyle>
                    </p>
                </span>
                <span>
                    <p>
                        Ruan Failache
                    </p>
                    <p>
                        <GithubIconStyle/> <NameStyle href="https://github.com/RuanFailache">RuanFailache</NameStyle>
                    </p>
                </span>
            </p>
        </FooterStyle>
    );
}

const FooterStyle = styled.footer`
    width: 100%;
    height: 90px;
    background-color: #212121;
    margin-top: 70px;
    padding-top: 12px;

    color: gray;

    p:first-child{
        text-align: center;
        margin-top: 5px;
    }
    p:last-child{
        display: flex;
        justify-content: space-evenly;
        margin-top: 5px;
    }
`;

const GithubIconStyle = styled(AiFillGithub)`
    margin-right: 3px;
`;

const NameStyle = styled.a`
    text-decoration: none;
    color: gray;
`;

const DevelopedByStyle = styled.p`
    font-size: 14px;
    margin-bottom: 15px;
`;