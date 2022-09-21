import styled from "styled-components";

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
  width: ${({ toggleSearch }) => (toggleSearch ? "500px" : "50px")};
  transition: ${({ theme }) => theme.transition.fast};
`;

export const SearchIcon = styled.div`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: 1.5rem;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: ${({ toggleSearch }) => (toggleSearch ? "100%" : "0%")};
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

export const SearchButton = styled.button``;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ImageCard = styled.div``;
