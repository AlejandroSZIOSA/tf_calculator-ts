import {
  useRef,
  type FormEvent,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { post } from "../../utils/http";
import ENDPOINTS from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { type Data, type User } from "../../types/shared";
import classes from "./LoginForm.module.css";
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";

type LoginFormProps = {
  handleUserData: (token: string) => void;
};

export default function LoginForm({ handleUserData }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const email = useRef<HTMLInputElement>(null); /* fix */
  const password = useRef<HTMLInputElement>(null); /* fix */

  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [areInputsLocked, setAreInputsLocked] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    function checkLocalStorage() {
      const userStored = localStorage.getItem("user");
      const user = userStored ? JSON.parse(userStored) : null;
      if (user) {
        email.current!.value = user.email;
        password.current!.value = user.password;
        setAreInputsLocked(true);
        /* console.log(user); */
      }
    }
    checkLocalStorage();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredEmail = email.current!.value;
    const enteredPassword = password.current!.value;
    const user: User = { email: enteredEmail, password: enteredPassword };
    loginUser(user);
  }

  async function loginUser(user: User) {
    setError(null);
    setIsLoading(true);
    try {
      const data = (await post<Data>(
        ENDPOINTS.POST_USER,
        "POST",
        user
      )) as Data;
      const token: string = data.token;
      handleUserData(token);
      setAreInputsLocked(true);
      if (localStorage.length === 0) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      navigate("/"); //To Home page
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
      localStorage.clear();
      setAreInputsLocked(false);
    } finally {
      setIsLoading(false);
    }
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
    <div className={classes.container}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Email</label>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          disabled={areInputsLocked} // check the login status here and disable the button accordingly
          ref={email}
          required
        />
        <label>Password</label>
        <div className={classes.passwordInputContainer}>
          <input
            placeholder="Password"
            id="password"
            type={isPasswordShowing ? "text" : "password"}
            name="password"
            disabled={areInputsLocked} // check the login status here and disable the button accordingly  // fix: use useRef here to fix this error.  This is because useRef creates a mutable ref object that can be updated multiple times during the component's rendering phase. It's useful when some value needs to be referenced in the component's render function, but needs to be changed during updates.
            ref={password}
            required
          />
          <SecondaryBtn
            type="button"
            onClickFN={toggleShowPassword}
            isDisabled={areInputsLocked}
          >
            {!isPasswordShowing ? "Show" : "Hide"}
          </SecondaryBtn>
        </div>

        <div className={classes.lockButtonsContainer}>
          <SecondaryBtn type="button" onClickFN={toggleLock}>
            {!areInputsLocked ? "Lock" : "Unlock"}
          </SecondaryBtn>
          <PrimaryBtn type="submit">Login</PrimaryBtn>
        </div>
      </form>
      {content}
    </div>
  );
}
