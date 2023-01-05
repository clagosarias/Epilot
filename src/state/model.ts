export type User = {
  name: string;
  avatarUrl: string;
  url: string;
  repositories: {
    totalCount: number;
    edges: Edge[];
    pageInfo: {
      startCursor: string;
      endCursor: string;
    };
  };
}

export type Pagination = {
  first?: number;
  after?: string | null;
  last?: number;
  before?: string | null;
}

export type Edge = {
  node: Repository;
  cursor: string;
}

export type Repository = {
  id: string;
  name: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  description: string;
}

export type Response = {
  user: User;
}