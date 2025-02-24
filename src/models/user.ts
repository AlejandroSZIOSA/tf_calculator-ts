//This is uses needs to "create" an "instance" of the  Object "User". -Create a new user
class User {
  id: string;
  email: string;
  password: string;

  constructor(emailText: string, passText: string) {
    this.id = new Date().toISOString(); // random id
    this.email = emailText;
    this.password = passText; // this is a very basic password check, for a real application you would want to use a more secure hashing algorithm.
  }
}
export default User;
