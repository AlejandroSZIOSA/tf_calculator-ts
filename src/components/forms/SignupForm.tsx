import { useRef, type FormEvent, useState, type ReactNode } from "react";
import ENDPOINTS from "../../utils/constants";
import { put, post } from "../../utils/http";
import { type User, type Data as LoginData } from "../../types/shared";
import { useNavigate } from "react-router-dom";
import { useUser_Ctx } from "../../store/user-Context";

//backend returns this type of data in this case
type Data = {
  message: string;
};
export default function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const email = useRef<HTMLInputElement>(null); /* fix */
  const password = useRef<HTMLInputElement>(null); /* fix */
  const confirmedPassword = useRef<HTMLInputElement>(null); /* fix */

  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [isConfirmPasswordShowing, setIsConfirmPasswordShowing] =
    useState<boolean>(false);

  const { set_Login_User } = useUser_Ctx();

  const navigate = useNavigate();

  async function signUpUser(newUser: User) {
    setMessage(null);
    setError(null);
    setIsLoading(true);
    try {
      const data = (await put<Data>(ENDPOINTS.PUT_NEW_USER, newUser)) as Data;
      const message: string = data.message;
      setMessage(message);

      localStorage.setItem("user", JSON.stringify(newUser));

      //Login new user automatic after the user was created
      const loginData = (await post<LoginData>(
        ENDPOINTS.POST_USER,
        newUser
      )) as LoginData;
      const token: string = loginData.token;
      set_Login_User(token);

      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        //event.currentTarget.reset(); //reset the form
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredEmail = email.current!.value;
    const enteredPassword = password.current!.value;
    const enteredConfirmPassword = confirmedPassword.current!.value;

    //Confirm the password
    if (enteredPassword !== enteredConfirmPassword) {
      setError("Passwords does'nt not match");
      return;
    }

    const newUser: User = { email: enteredEmail, password: enteredPassword };
    //event.currentTarget.reset(); //reset the form
    signUpUser(newUser);
  }

  const toggleShowPassword = () => setIsPasswordShowing(!isPasswordShowing);
  const toggleShowConfirmPassword = () =>
    setIsConfirmPasswordShowing(!isConfirmPasswordShowing);

  //messages JSX conditionals
  let content: ReactNode;

  if (isLoading) {
    content = <p>Sign Up new User...</p>;
  }
  if (error) {
    content = <p>Error: {error}</p>;
  }
  if (message) {
    content = <p>{message}</p>;
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
          type="email"
          name="email"
          ref={email}
          required
        />
        <div>
          <input
            placeholder="Password"
            id="password"
            type={isPasswordShowing ? "text" : "password"}
            name="password"
            ref={password}
            required
          />
          <button type="button" onClick={toggleShowPassword}>
            {!isPasswordShowing ? "Show" : "Hide"}
          </button>
        </div>
        <div>
          <input
            placeholder="Re-Password"
            id="re-password"
            type={isConfirmPasswordShowing ? "text" : "password"}
            name="re-password"
            ref={confirmedPassword}
            required
          />
          <button type="button" onClick={toggleShowConfirmPassword}>
            {!isConfirmPasswordShowing ? "Show" : "Hide"}
          </button>
        </div>
        <button type="submit">Sign-Up</button>
      </form>
    </div>
  );
}
