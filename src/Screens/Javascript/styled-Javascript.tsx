import styled from "styled-components/macro";

export const JavvascriptContainer = styled.div``;

export const JavaScriptTitle = styled.h1`
  font-size: 21px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.titleColor};
  text-align: center;
`;

export const JavvascriptSubContainer = styled.div`
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.containerColor};

  ${JavaScriptTitle} {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    padding-bottom: 16px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 64px;
  padding: 16px 0px;

  button {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.buttonColor};
    background: ${({ theme }) => theme.colors.primaryColor};
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  place-items: center;
  padding: 24px;
`;

export const Card = styled.div`
  display: grid;
  padding: 16px;
  background: ${({ theme }) => theme.colors.formColor};
  border-radius: 10px;
`;

export const CardImg = styled.img`
  width: 100%;
  border-radius: 16px;
  margin: 0 auto;
`;

export const CardInfo = styled.div``;

export const CardCarMakeText = styled.h3`
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const GroupedCardCarMakeText = styled.h3`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: 21px;
`;

export const CardCarInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0px;
  }

  span {
  }
`;
