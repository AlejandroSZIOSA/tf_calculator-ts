import { useRef, type FormEvent, useState, type ReactNode } from "react";
import ENDPOINTS from "../../utils/constants";
import { put, post } from "../../utils/http";
import { type User, type Data as LoginData } from "../../types/shared";
import { useNavigate } from "react-router-dom";
import { useUser_Ctx } from "../../store/user-Context";
import classes from "./SignupForm.module.css";
import SecondaryBtn from "../buttons/SecondaryBtn";
import PrimaryBtn from "../buttons/PrimaryBtn";

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
        "POST", //Method
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
      setError("Passwords does'nt match");
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
    content = <p className={classes.formMessages}>Creating new User...</p>;
  }
  if (error) {
    content = (
      /* using two classes */
      <p className={`${classes.formMessages} ${classes.errorMessage}`}>
        Error: {error}
      </p>
    );
  }
  if (message) {
    content = (
      <p className={`${classes.formMessages} ${classes.goodMessage}`}>
        {message}
      </p>
    );
  }

  return (
    <div className={classes.container}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Email</label>
        <input
          className={classes.input}
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          ref={email}
          required
        />
        <div className={classes.passwordContainer}>
          <label>Password</label>
          <div className={classes.passwordInnerContainer}>
            <input
              className={classes.input}
              placeholder="Password"
              id="password"
              type={isPasswordShowing ? "text" : "password"}
              name="password"
              ref={password}
              required
            />
            <SecondaryBtn
              type="button"
              variant="not-rounded"
              onClickFN={toggleShowPassword}
            >
              {!isPasswordShowing ? "Show" : "Hide"}
            </SecondaryBtn>
          </div>
        </div>
        <div className={classes.passwordContainer}>
          <label>Confirm Password</label>
          <div className={classes.passwordInnerContainer}>
            <input
              className={classes.input}
              placeholder="Re-Password"
              id="re-password"
              type={isConfirmPasswordShowing ? "text" : "password"}
              name="re-password"
              ref={confirmedPassword}
              required
            />
            <SecondaryBtn
              type="button"
              variant="not-rounded"
              onClickFN={toggleShowConfirmPassword}
            >
              {!isConfirmPasswordShowing ? "Show" : "Hide"}
            </SecondaryBtn>
          </div>
        </div>
        {content}
        <div className={classes.createBtnContainer}>
          <PrimaryBtn type="submit">Create</PrimaryBtn>
        </div>
      </form>
    </div>
  );
}
