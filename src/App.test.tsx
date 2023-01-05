import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Search page', () => {
  it('renders input search on home screen', async () => {
    render(<App />);
    const searchInput = await screen.findByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });

  it('renders search button on home screen', async () => {
    render(<App />);
    const searchButton = await screen.findByTestId('search-button');
    expect(searchButton).toBeInTheDocument();
  });

  it('requires username input', async () => {
    render(<App />);
    const searchButton = await screen.findByTestId('search-button');
    userEvent.click(searchButton);

    const searchInput = await screen.findByTestId('search-input');
    expect(searchInput).toBeRequired();
  });

  it('searches for a non-existing user', async () => {
    render(<App />);
    const searchInput = await screen.findByTestId('search-input');
    const searchButton = await screen.findByTestId('search-button');

    const user = 'loremp-ipsummuspi-pmerol';
    userEvent.type(searchInput, user);
    userEvent.click(searchButton);

    const userNotFound = await screen.findByTestId('user-not-found');
    expect(userNotFound).toBeInTheDocument();
  });

  it('goes back to search', async () => {
    render(<App />);
    const userNotFound = await screen.findByTestId('user-not-found');
    expect(userNotFound).toBeInTheDocument();

    const goBackButton = await screen.findByTestId('go-back-button');
    userEvent.click(goBackButton);

    const searchPage = await screen.findByTestId('search-page');
    expect(searchPage).toBeInTheDocument();
  });
});

describe('User page', () => {
  it('searches for an existing user', async () => {
    render(<App />);
    const searchInput = await screen.findByTestId('search-input');
    const searchButton = await screen.findByTestId('search-button');

    const user = 'gr2m';
    userEvent.type(searchInput, user);
    userEvent.click(searchButton);

    const userPage = await screen.findByTestId('user-page');
    expect(userPage).toBeInTheDocument();
  });

  it('renders user information', async () => {
    render(<App />);
    const userPage = await screen.findByTestId('user-page');
    expect(userPage).toBeInTheDocument();

    const userAvatar = await screen.findByTestId('user-avatar');
    expect(userAvatar).toBeInTheDocument();

    const userName = await screen.findByTestId('user-name');
    expect(userName).toBeInTheDocument();

    const userGithub = await screen.findByTestId('user-github');
    expect(userGithub).toHaveAttribute('href')
  });

  it('renders user repositories', async () => {
    render(<App />);
    const userPage = await screen.findByTestId('user-page');
    expect(userPage).toBeInTheDocument();

    const userRepositories = await screen.findByTestId('user-repositories');
    expect(userRepositories).toBeInTheDocument();
  });

  it('can paginate through user repositories', async () => {
    render(<App />);
    const userPage = await screen.findByTestId('user-page');
    expect(userPage).toBeInTheDocument();

    const userRepositories = await screen.findByTestId('user-repositories');
    expect(userRepositories).toBeInTheDocument();

    const paginationNext = await screen.findByTestId('pagination-next');
    expect(paginationNext).toBeInTheDocument();
    userEvent.click(paginationNext);

    const paginationCurrent = await screen.findByTestId('pagination-current');
    expect(paginationCurrent).toHaveTextContent('2');

    const paginationPrevious = await screen.findByTestId('pagination-previous');
    expect(paginationPrevious).toBeInTheDocument();
    userEvent.click(paginationPrevious);
    expect(paginationCurrent).toHaveTextContent('1');

    const paginationLast = await screen.findByTestId('pagination-last');
    expect(paginationLast).toBeInTheDocument();
    userEvent.click(paginationLast);
    expect(paginationCurrent.textContent).toEqual(paginationLast.textContent);

    const paginationFirst = await screen.findByTestId('pagination-first');
    expect(paginationFirst).toBeInTheDocument();
    userEvent.click(paginationFirst);
    expect(paginationCurrent).toHaveTextContent('1');
  });
});