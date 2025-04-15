import { useRef, type FormEvent } from "react";
import { post } from "../../utils/http";

type LoginFormProps = {
  handleUserData: (token: string) => void;
};

type Data = {
  token: string;
  userId: string;
};

export default function LoginForm({ handleUserData }: LoginFormProps) {
  const email =
    useRef<HTMLInputElement>(
      null
    ); /* fix error with null and the added generic value */
  const password = useRef<HTMLInputElement>(null);

  async function loginUser(email: string, password: string) {
    /* setIsFetching(true); */
    const user = { email, password };
    try {
      const data = (await post<Data>(
        "http://localhost:8081/auth/login",
        user
      )) as Data;

      const token: string = data.token;
      console.log(token);
      handleUserData(token);
      /*  setFetchedPosts(blogPosts); */
    } catch (error) {
      //3.5 using instanceof typescrypt validate type error message :)
      if (error instanceof Error) {
        /*  setError(error.message); */
      }
    }
    /*  setIsFetching(false); */
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    /* new FormData(event.currentTarget); //Uses Generic HTMLFormElement */
    const enteredEmail = email.current!.value;
    const enteredPassword = password.current!.value;

    event.currentTarget.reset(); //reset the form :)
    loginUser(enteredEmail, enteredPassword);
  }
  return (
    /* can use an arrow fn if stand alone */
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" ref={email} />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input id="password" type="text" name="password" ref={password} />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
}
