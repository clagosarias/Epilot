import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContainer, SearchInput, SearchButton } from "../styles/SearchStyles";
import { FlexContainer } from "../components/flexContainer/FlexContainer";

const SearchPage = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const searchUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/user/${user}`);
  }

  return (
    <SearchContainer data-testid="search-page">
      <h1>Suche</h1>
      <form onSubmit={searchUser}>
        <FlexContainer alignItems="center" columnGap="1.6">
          <SearchInput
            autoFocus
            required
            type="text"
            placeholder="Github username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            data-testid="search-input"
          />
          <SearchButton type="submit" data-testid="search-button"><i className="fa-solid fa-magnifying-glass"></i></SearchButton>
        </FlexContainer>
      </form>
    </SearchContainer>
  )
}

export default SearchPage;