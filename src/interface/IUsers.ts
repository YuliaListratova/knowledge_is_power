export interface IUsersData {
  question: string;
  answers: [string, string, string, string];
  id: 0;
}

export interface IUsers {
  ok: boolean;
  data: Array<IUsersData>;
  amount: -1;
}
