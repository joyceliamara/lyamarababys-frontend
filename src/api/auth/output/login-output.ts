export type LoginOutput = {
  user: User;
  token: string;
};

type User = {
  id: string;
  email: string;
};
