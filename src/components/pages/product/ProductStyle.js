import styled from "styled-components";

export const ContentStyle = styled.section`
  display: flex;
  gap: 30px;
  position: absolute;
  width: calc(70% - 15px);
  height: 655px;
  top: 90px;
  left: 0;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  box-sizing: border-box;

  @media (max-width: 1135px) {
    position: initial;
    width: 100%;
    display: block;
    height: fit-content;
    margin-top: 90px;
  }
`

export const CoverStyle = styled.img`
  display: block;
  width: 400px;
  height: 500px;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: 1135px) {
    width: 100%;
    height: 300px;
  }
`

export const ImageListStyle = styled.ul`
  display: flex;
  width: 400px;
  margin-top: 15px;
  align-items: center;
  justify-content: space-between;
  position: relative;

  & > li {
    width: calc(100% / 4 - 10.75px);
  }

  & > li > img {
    display: block;
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 1135px) {
    width: 100%;
  }
`

export const DescriptionStyle = styled.article`
  display: block;
  width: 300px;
  margin-top: 60px;
  clear: right;

  & > h2 {
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  & > p {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 1135px) {
    width: 100%;
    margin-top: 30px;
  }
`

export const NotFound = styled.p`
  display: block;
  text-align: center;
  margin-top: 240px;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: #a6a6a6;
`