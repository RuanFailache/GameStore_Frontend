import styled from 'styled-components'

export const FormStyle = styled.form`
  display: flex;
  width: 500px;
  margin: 120px auto 0;
  padding: 60px;
  flex-flow: nowrap column;
  gap: 7.5px;
  border-radius: 5px;
  background-color: white;
  box-sizing: border-box;

  & > h1 {
    display: block;
    margin-bottom: 15px;
    font-size: 24px;
    line-height: 28px;
    font-weight: bold;
    text-align: center;
  }

  & > button {  
    border-radius: 20px;
    margin-top: 7.5px;
    transition: .6s;
  }

  & > button:disabled {
    background-color: #f30a;
  }

  & > a {
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 1135px) {
    position: initial;
    width: calc(100% - 60px);
    padding: 30px;
  }
`;

export const InputStyle = styled.input`
  display: block;
  font-size: 16px;
  line-height: 20px;
  padding: 7.5px 15px;
  border: solid 1px #cecece;
  border-radius: 20px;
  background-color: #fff;
`;

export const AlertStyle = styled.p`
  display: flex;
  align-items: center;
  gap: 7.5px;
  font-size: 14px;
  text-align: center;
  color: #a6a6a6;

  & > span {
    display: inline-block;
    border: solid 1px #a6a6a6;
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }
`;