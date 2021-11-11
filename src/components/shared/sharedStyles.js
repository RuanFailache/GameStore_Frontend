import styled from "styled-components";

export const ContainerStyle = styled.main`
  display: block;
  width: 935px;
  margin: 0 auto;
  position: relative;
`;

export const ContentStyle = styled.section`
  position: absolute;
  width: calc(70% - 135px);
  top: 90px;
  left: 0;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
`

export const SideBarStyle = styled.aside`
  position: fixed;
  width: calc(935px * 0.3);
  top: 90px;
  left: calc((100% - 935px) / 2 + 594.5px);
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);

  & > p {
    display: block;
    font-size: 16px;
    line-height: 19px;
  }

  & > p > strong {
    font-weight: bold;
  }
`;

export const PriceStyle = styled.strong`
  display: block;
  width: 100%;
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  margin-bottom: 15px;
  padding-bottom: 7.5px;
  border-bottom: solid 1px rgba(0, 0, 0, .1);
  color: #f30;
`;

export const FilledButtonStyle = styled.button`
  display: block;
  width: 100%;
  font-size: 16px;
  line-height: 19px;
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
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  padding: 15px;
  border: solid 2px #f30;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`;