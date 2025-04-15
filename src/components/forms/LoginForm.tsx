import { useRef, type FormEvent, useState, ReactNode } from "react";
import { post } from "../../utils/http";
import ENDPOINTS from "../../utils/constants";

type LoginFormProps = {
  handleUserData: (token: string) => void;
};

type Data = {
  token: string;
  userId: string;
};

type User = {
  email: string;
  password: string;
};

export default function LoginForm({ handleUserData }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const email = useRef<HTMLInputElement>(null); /* fix */
  const password = useRef<HTMLInputElement>(null); /* fix */

  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [areInputsLocked, setAreInputsLocked] = useState<boolean>(false);

  async function handleLoginUser(user: User) {
    setError(null);
    setIsLoading(true);
    try {
      const data = (await post<Data>(ENDPOINTS.POST_USER, user)) as Data;
      const token: string = data.token;
      /* console.log(token); */
      handleUserData(token);
      setAreInputsLocked(true);
    } catch (error) {
      //using instanceof that validate type error message :)
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredEmail = email.current!.value;
    const enteredPassword = password.current!.value;
    const user: User = { email: enteredEmail, password: enteredPassword };
    //event.currentTarget.reset(); //reset the form
    handleLoginUser(user);
  }

  const toggleLock = () => setAreInputsLocked(!areInputsLocked);

  const toggleShowPassword = () => setIsPasswordShowing(!isPasswordShowing);

  //messages JSX conditionals
  let content: ReactNode;

  if (isLoading) {
    content = <p>Login User...</p>;
  }

  if (error) {
    content = <p>Error: {error}</p>;
  }

  return (
    <div>
      {content}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          placeholder="Email"
          id="email"
          type="text"
          name="email"
          disabled={areInputsLocked} // check the login status here and disable the button accordingly
          ref={email}
        />
        <div>
          <input
            placeholder="Password"
            id="password"
            type={isPasswordShowing ? "text" : "password"}
            name="password"
            disabled={areInputsLocked} // check the login status here and disable the button accordingly  // fix: use useRef here to fix this error.  This is because useRef creates a mutable ref object that can be updated multiple times during the component's rendering phase. It's useful when some value needs to be referenced in the component's render function, but needs to be changed during updates.
            ref={password}
          />
          <button type="button" onClick={toggleShowPassword}>
            {!isPasswordShowing ? "Show" : "Hide"}
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <button type="button" onClick={toggleLock}>
            {!areInputsLocked ? "Lock" : "Unlock"}
          </button>
          <button type="submit" disabled={areInputsLocked}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
