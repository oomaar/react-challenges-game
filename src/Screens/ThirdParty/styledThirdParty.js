import styled from "styled-components";
import { lgScreen, mdScreen, xlScreen } from "../../Global/GlobalStyles";

export const ThirdPartyContainer = styled.div``;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  margin-bottom: 3rem;
  padding-bottom: 1rem;
`;

export const SearchInputContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ toggleSearch, theme }) =>
      toggleSearch ? theme.colors.titleColor : "transparent"};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  height: 55px;
  width: ${({ toggleSearch }) => (toggleSearch ? "600px" : "50px")};
  transition: ${({ theme }) => theme.transition.fast};
`;

export const SearchIcon = styled.div`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: 1.5rem;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: ${({ toggleSearch }) => (toggleSearch ? "80%" : "0%")};
  color: ${({ theme }) => theme.colors.titleColor};
  outline: 0;
  border: 0;
  background: transparent;
  padding-left: 1rem;
  font-size: 1.5rem;
  transition: ${({ theme }) => theme.transition.fast};

  ::placeholder {
    color: ${({ theme }) => theme.colors.titleColor};
  }
`;

export const SearchButton = styled.button`
  font-size: 1.3rem;
  border: 0;
  outline: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.titleColor};
  transition: ${({ theme }) => theme.transition.slow};
  opacity: ${({ toggleSearch }) => (toggleSearch ? "1" : "0")};
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: ${xlScreen}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${lgScreen}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ImageCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  height: fit-content;

  @media screen and (max-width: ${mdScreen}) {
    width: 290px;
    margin: 0 auto;
  }
`;

export const CardImage = styled.img`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  margin-bottom: 1rem;
`;

export const CardImageDetails = styled.div`
  display: flex;
  padding: 0.5rem;
`;

export const CardImageUser = styled.div`
  img {
    border-radius: 100%;
  }

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.titleColor};
  }
`;

export const CardImageLinks = styled.div`
  color: ${({ theme }) => theme.colors.titleColor};
  margin-left: auto;

  span {
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
  }

  .bxs-heart {
    color: ${({ theme }) => theme.colors.alert};
    font-size: 1.3rem;
  }
`;

export const CardImageInstagram = styled.div`
  span {
    color: ${({ theme }) => theme.colors.warning};
    font-size: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.titleColor};
    display: flex;
    align-items: center;
    gap: 0 0.5rem;
  }
`;
