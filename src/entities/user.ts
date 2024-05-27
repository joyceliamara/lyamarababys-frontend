export default class User {
  id: string;
  name: string;
  surname: string;
  email: string;

  constructor(data: UserType) {
    this.id = data.id;
    this.name = data.name;
    this.surname = data.surname;
    this.email = data.email;
  }
}

type UserType = {
  id: string;
  name: string;
  surname: string;
  email: string;
};
