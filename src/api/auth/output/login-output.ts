export type LoginOutput = {
  id: string;
  email: string;
  contact: Contact;
};

type Contact = {
  name: string;
  surname: string;
};
