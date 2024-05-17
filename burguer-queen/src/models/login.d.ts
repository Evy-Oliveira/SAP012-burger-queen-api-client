interface Login {
  accessToken: string;
  user: {
    email: string;
    role: string;
    id: number;
  };
}
