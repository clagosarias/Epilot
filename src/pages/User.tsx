import { graphqlWithAuth, GET_USER_REPOS } from "../state/queries/queries";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Spinner } from "../components/spinner/Spinner";
import { Button, GoBack, NotFound, RepositoriesList, RepositoriesListBody, RepositoriesListHeader, RepositoriesPagination, RepositoryItem, UserContainer, UserProfile, UserProfileImg } from "../styles/UserStyles";
import { FlexContainer } from "../components/flexContainer/FlexContainer";
import { Pagination, Response, User, Edge } from "../state/model";

const UserPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<User | null>(null);
  const [gridView, setGridView] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const PER_PAGE = 10;
  const pageCount = Math.ceil(userData?.repositories?.totalCount || 1 / PER_PAGE);

  const goBackToSearch = () => {
    navigate('/');
  }

  const getPrevieousPage = () => {
    if (currentPage > 0) {
      getUserRepos({ last: PER_PAGE, before: userData?.repositories?.pageInfo.startCursor });
      setCurrentPage(currentPage - 1);
    }
  }

  const getNextPage = () => {
    if (currentPage < pageCount - 1) {
      getUserRepos({ first: PER_PAGE, after: userData?.repositories?.pageInfo.endCursor });
      setCurrentPage(currentPage + 1);
    }
  }

  const getFirstPage = () => {
      getUserRepos({first: PER_PAGE});
      setCurrentPage(0);
  }

  const getLastPage = () => {
    if (currentPage < pageCount - 1) {
      getUserRepos({last: PER_PAGE});
      setCurrentPage(pageCount - 1);
    }
  }

  const getUserRepos = useCallback(async (pagination: Pagination) => {
    try {
      const response: Response = await graphqlWithAuth(GET_USER_REPOS, {
        login: params.user,
        ...pagination,
      });
      setLoading(false);
      const user: User = response.user;
      setUserData(user);
    }
    catch (error) {
      setLoading(false);
    }
  }, [params.user]);

  useEffect(() => {
    getUserRepos({ first: PER_PAGE });
  }, [getUserRepos]);


  return (
    loading ? <Spinner /> :
      userData ? (
        <UserContainer flexDirection="column" rowGap="2.4" alignItems="center" data-testid="user-page">
          <GoBack onClick={() => goBackToSearch()} data-testid="go-back-button">
            <i className="fas fa-arrow-left"></i>
            <p>Go back to search</p>
          </GoBack>

          <UserProfile>
            <UserProfileImg src={userData?.avatarUrl} alt="" data-testid="user-avatar"/>

            <h2 data-testid="user-name">{userData?.name}</h2>

            <FlexContainer columnGap="0.8">
              <p>
                <i className="fas fa-book"></i>
                { userData?.repositories.totalCount } Repositories
              </p>

              <a href={userData?.url} target="_blank" rel="noreferrer" data-testid="user-github" aria-label="User github profile">
                <i className="fas fa-link"></i>
                Github Profile
              </a>
            </FlexContainer>
          </UserProfile>

          <RepositoriesList>
            <RepositoriesListHeader justifyContent="space-between">
              <h3>Repositories</h3>

              <FlexContainer columnGap="0.8">
                <Button onClick={() => {setGridView(true)}} active={gridView}><i className="fas fa-table-cells-large"></i></Button>
                <Button onClick={() => {setGridView(false)}} active={!gridView}><i className="fas fa-list"></i></Button>
              </FlexContainer>
            </RepositoriesListHeader>

            <RepositoriesListBody gridTemplateColumns={gridView ? '1fr 1fr' : '1fr'} gap="1.6" data-testid="user-repositories">
              {userData?.repositories.edges.map(({ node: repository }: Edge) => (
                <RepositoryItem key={repository.id} flexDirection="column" rowGap="1.6">
                  <FlexContainer columnGap="1.6" alignItems="center" justifyContent="space-between">
                    <a href={repository.url} target="_blank" rel="noreferrer">
                      <h4>{repository.name}</h4>
                    </a>

                    <FlexContainer columnGap="0.8">
                      <p>
                        <i className="fas fa-star"></i>
                        {repository.stargazerCount} Stars
                      </p>

                      <p>
                        <i className="fas fa-code-branch"></i>
                        {repository.forkCount} Forks
                      </p>
                    </FlexContainer>
                  </FlexContainer>

                  {!gridView && (
                    <p>{repository.description}</p>
                  )}
                </RepositoryItem>
              ))}
            </RepositoriesListBody>

            <RepositoriesPagination columnGap="1.6" justifyContent="center" alignItems="center">
              <Button onClick={() => getPrevieousPage()} disabled={currentPage === 0} data-testid="pagination-previous">Previous</Button>
              <Button onClick={() => getFirstPage()} disabled={currentPage === 0} data-testid="pagination-first">1</Button>
              <p data-testid="pagination-current">{currentPage + 1}</p>
              <Button onClick={() => getLastPage()} disabled={currentPage + 1 === pageCount} data-testid="pagination-last">{pageCount}</Button>
              <Button onClick={() => getNextPage()} disabled={currentPage + 1 === pageCount} data-testid="pagination-next">Next</Button>
            </RepositoriesPagination>
          </RepositoriesList>
        </UserContainer>
      ) : (
        <NotFound alignItems="center" justifyContent="center" flexDirection="column" data-testid="user-not-found">
          <h2>User not found</h2>

          <GoBack onClick={() => goBackToSearch()} data-testid="go-back-button">
            <i className="fas fa-arrow-left"></i>
            <p>Go back to search</p>
          </GoBack>
        </NotFound>
      )
  )
}

export default UserPage;