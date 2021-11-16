import styled from "styled-components";

export const ContainerStyle = styled.main`
  display: block;
  width: 1135px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1135px) {
    width: 100%;
  }
`;

export const SideBarStyle = styled.aside`
  position: fixed;
  width: calc(1135px * 0.3);
  top: 90px;
  left: calc((100% - 1135px) / 2 + 1135px * 0.7);
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  box-sizing: border-box;

  & > p {
    display: block;
    font-size: 12px;
    line-height: 14px;
  }

  & > p > strong {
    font-weight: bold;
  }

  @media (max-width: 1135px) {
    position: initial;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const PriceStyle = styled.strong`
  display: block;
  width: 100%;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 7.5px;
  padding-bottom: 3.25px;
  border-bottom: solid 1px rgba(0, 0, 0, .1);
  color: #f30;
`;

export const FilledButtonStyle = styled.button`
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 7.5px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: #f30;
  color: #fff;
  cursor: pointer;
`;

export const OutlineButtonStyle = styled.button`
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  padding: 15px;
  border: solid 2px #f30;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`;