import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    margin-bottom: 1.6rem;
  }
`;

export const SearchInput = styled.input`
  border: 2px solid var(--dark-grey);
  border-radius: 2.4rem;
  padding: 0.8rem;
  font-size: 1.6rem;
  color: var(--dark-grey);

  &:focus {
    border-color: var(--primary);
    outline: none;
  }
`;

export const SearchButton = styled.button`
  border: 0.2rem solid var(--dark-grey);
  border-radius: 50%;
  width: 3.8rem;
  height: 3.8rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--dark-grey);
    color: var(--white);
  }
`;