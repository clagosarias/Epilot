import styled from "styled-components";
import { FlexContainer } from "../components/flexContainer/FlexContainer";
import { GridContainer } from "../components/gridContainer/GridContainer";
import { desktopStyles, mobileStyles } from "./Utils";

export const UserContainer = styled(FlexContainer)`
  padding: 1.6rem;

  ${desktopStyles} {
    padding: 2.4rem 12rem;
  };
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.8rem;

  i {
    margin-right: 0.4rem;
  }
`;

export const UserProfileImg = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  border: 0.4rem solid var(--dark-grey);
`;

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 1.6rem;
  font-weight: 600;

  i {
    opacity: 0;
    margin-right: -1.8rem;
    transition: all 0.2s ease-in-out;
  }

  p {
    text-decoration: underline var(--dark-grey) dotted;
    text-underline-position: under;
  }

  &:hover {
    i {
      opacity: 1;
      margin-right: 0.8rem;
    }
  }
`;

export const RepositoriesList = styled.div`
  width: 100%;
`;

export const RepositoriesListHeader = styled(FlexContainer)`
  margin-bottom: 2.4rem;
`;

export const RepositoriesListBody = styled(GridContainer)`
  width: 100%;

  ${mobileStyles} {
    grid-template-columns: 1fr;
  };
`;

export const RepositoryItem = styled(FlexContainer)`
  padding: 1.6rem;
  border-radius: 0.8rem;
  background: var(--white);
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  i {
    margin-right: 0.4rem;
  }
`;

export const Button = styled.button<{
  active?: boolean;
}>`
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  background: var(--white);
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--dark-grey);

  &:not[disabled]:hover {
    background: var(--dark-grey);
    color: var(--white);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ active }) =>
    active &&
    `
    background: var(--dark-grey);
    color: var(--white);
  `}
`;

export const RepositoriesPagination = styled(FlexContainer)`
  margin-top: 3.2rem;

  p {
    font-weight: 600;
    font-size: 1.6rem;
    margin: 0 0.8rem;
  }
`;

export const NotFound = styled(FlexContainer)`
  height: 100vh;

  h2 {
    margin-bottom: 1.6rem;
  }
`;